import React from "react";
import styles from "./categoryList.module.css";

const CategoryList = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}></div>
    </div>
  );
};

export default CategoryList;
