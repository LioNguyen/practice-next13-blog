"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({}) => {
  const router = useRouter();

  return <div className={styles.container}>Pagination</div>;
};

export default Pagination;