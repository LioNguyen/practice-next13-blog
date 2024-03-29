import { Text } from "@chakra-ui/react";
import axios from "axios";

import styles from "@/components/cardList/cardlist.module.css";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

type Page = number;
type Cat = string;

const getData = async (page: Page, cat?: Cat) => {
  const res = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}&cat=${cat || ""}`
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
    <div className={styles.container}>
      <Text fontSize="5xl" fontWeight={500} margin="50px 0">
        Recent Posts
      </Text>
      <div className={styles.posts}>
        {posts?.map((item: any) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
