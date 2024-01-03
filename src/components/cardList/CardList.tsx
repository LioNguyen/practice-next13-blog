import React from "react";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

const CardList = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card
          item={{
            img: "/p1.jpeg",
            createdAt: "03.01.2024",
            catSlug: "CULTURE",
            desc: "lorem",
          }}
        />
        <Card
          item={{
            img: "/p1.jpeg",
            createdAt: "03.01.2024",
            catSlug: "CULTURE",
            desc: "lorem",
          }}
        />
        <Card
          item={{
            img: "/p1.jpeg",
            createdAt: "03.01.2024",
            catSlug: "CULTURE",
            desc: "lorem",
          }}
        />
        <Card
          item={{
            img: "/p1.jpeg",
            createdAt: "03.01.2024",
            catSlug: "CULTURE",
            desc: "lorem",
          }}
        />
        <Card
          item={{
            img: "/p1.jpeg",
            createdAt: "03.01.2024",
            catSlug: "CULTURE",
            desc: "lorem",
          }}
        />
      </div>
      <Pagination page={2} hasPrev={true} hasNext={true} />
    </div>
  );
};

export default CardList;
