import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Link href="blog">Blog</Link>
      <Link href="docs">Docs</Link>
      <Link href="product">Product</Link>
    </div>
  );
}
