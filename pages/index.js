import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

export default function Home() {
  const router = useRouter();
  const [session, loading] = useSession();

  const handleClick = () => {
    console.log("Opening Docs");
    router.push("/docs");
    // router.replace("/blog"); also use this but page replace.
  };

  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <br />
      {session ? (
        <h3>Welcome you signed in , {session.user.name}</h3>
      ) : (
        <h3>You not signed in</h3>
      )}
      <br />
      <Link href="blog">Blog</Link>
      <Link href="docs">Docs</Link>
      <Link href="product">Product</Link>
      <br />
      <Link href="posts">Posts</Link>
      <br />
      <button onClick={handleClick}>Docs</button>
    </div>
  );
}
