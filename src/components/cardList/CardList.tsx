import React from "react";

import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import axios from "axios";

type Page = number;
type Cat = string;

const getData = async (page: Page, cat?: Cat) => {
  const res = await axios.get(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`
  );

  if (res.statusText !== "OK") {
    throw new Error("Failed");
  }

  return res.data;
};

interface Props {
  page: Page;
  cat?: Cat;
}

const CardList = async ({ page, cat }: Props) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div>
      <h1>Recent Posts</h1>
      <div>
        {posts?.map((item: any) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
