import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h2>
        {post.id} {post.title}
      </h2>
      <br />
      <p>{post.body}</p>
    </div>
  );
}

export default post;

export async function getStaticPaths() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts = await posts.json();
  // generate the paths
  // const paths = posts.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  const paths = [
    { params: { postId: "1" } },
    { params: { postId: "2" } },
    { params: { postId: "3" } },
  ];
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
    // revalidate: 10   to implement ISR
  };
}
