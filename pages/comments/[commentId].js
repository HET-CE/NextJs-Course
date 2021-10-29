import React from "react";

export default function comment({ comment }) {
  return (
    <div>
      {comment.id} , {comment.text}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(comment);

  // Don't do this because we can't call our own API end-point in getStaticProps or getServerSideProps for pre-rendering.
  //   const response = await fetch(`http:localhost:3000/api/comments/${commentId}`);
  //   const comment = await response.json();

  return {
    props: {
      comment,
    },
  };
}
