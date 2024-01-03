import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

interface Props {
  params: any;
}

const SinglePage = async ({ params }: Props) => {
  const { slug } = params;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, qui.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Lio</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            maxime!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            maxime!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            maxime!
          </p>
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;