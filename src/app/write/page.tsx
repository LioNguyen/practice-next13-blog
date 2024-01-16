"use client";

import * as S from "./WritePage.styles";

import { Badge, Stack, useToast } from "@chakra-ui/react";
import axios from "axios";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";

import { Loading } from "@/components/molecules/loading/Loading";
import { app } from "@/utils/firebase";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<any>(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [categories, setCategories] = useState([]);

  const getCategoryList = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`
    );

    if (res.statusText !== "OK") {
      throw new Error("Failed");
    }

    setCategories(res.data.categories);
    setCatSlug(res.data.categories[0].title);
    // return res.data;
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file!.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className="loading">Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          slug: slugify(title),
          catSlug: catSlug || "style", //If not selected, choose the general category
        }),
      });

      if (res.status === 200) {
        router.refresh();
        toast({
          description: "Created Successfully!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        const data = await res.json();
        router.push(`/posts/${data.slug}`);
      }
    } catch (error) {
      console.log("🚀 @log ~ handleSubmit ~ error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Wrapper
      margin={0}
      padding={0}
      maxWidth={"100%"}
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
    >
      {isLoading ? <Loading /> : <></>}
      <S.TitleInput
        padding="50px"
        marginBottom="50px"
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Stack direction="row">
        {categories?.map((item: any) => (
          <Badge
            key={item.id}
            borderRadius={"8px"}
            marginBottom={"30px"}
            padding={"8px 12px"}
            cursor={"pointer"}
            onClick={() => setCatSlug(item.title)}
            opacity={catSlug === item.title ? 1 : 0.5}
            className={`category ${item.slug}`}
          >
            {item.title}
          </Badge>
        ))}
      </Stack>
      <div className="editor">
        <button className="button" onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className="add">
            <input
              type="file"
              id="image"
              onChange={(e) => !!e.target.files && setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className="addButton">
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className="addButton">
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className="addButton">
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className="textArea"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className="publish" onClick={handleSubmit}>
        Publish
      </button>
    </S.Wrapper>
  );
};

export default WritePage;
