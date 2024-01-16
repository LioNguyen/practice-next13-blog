import { Box, Container } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <Container
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      height={100}
      maxWidth={"100%"}
    >
      <Box display={"flex"} flex={1} alignItems={"center"} gap={"10px"}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </Box>
      <Box
        display={"flex"}
        flex={1}
        alignItems={"center"}
        justifyContent={"flex-end"}
        gap={"20px"}
      >
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        {/* <Link href="/" className={styles.link}>
          Contact
        </Link> */}
        {/* <Link href="/" className={styles.link}>
          About
        </Link> */}
        <AuthLinks />
      </Box>
    </Container>
  );
};

export default Navbar;
