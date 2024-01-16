"use client";

import * as S from "./CategoryList.style";

import { Text } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

export const revalidate = 0;

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`
    );

    if (res.statusText !== "OK") {
      throw new Error("Failed");
    }

    setCategories(res.data.categories);
    // return res.data;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Wrapper margin={0} padding={0} width={"100%"} maxWidth={"100%"}>
      <Text fontSize="5xl" fontWeight={500} margin="50px 0">
        Popular Categories
      </Text>
      <div className="categories">
        {categories?.map((item: any) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`category ${item.slug}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className="image"
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </S.Wrapper>
  );
};

export default CategoryList;
