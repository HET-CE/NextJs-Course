import React from "react";
import Link from "next/link";

function post({ post }) {
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
  };
}
