"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";

interface Props {
  postSlug?: string;
}

const fetcher = async (url: string) => {
  const res = await axios.get(url);

  if (res.statusText !== "OK") {
    throw new Error(res.statusText);
  }

  return res.data;
};

const Comments = ({ postSlug }: Props) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXTAUTH_URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await axios.post("/api/comments", JSON.stringify({ desc, postSlug }));
    mutate();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item: any) => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>{item.createdAt}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
