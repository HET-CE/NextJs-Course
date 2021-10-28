import React from "react";

export default function comment({ comments, category }) {
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>
      </h1>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h2>
              {comment.id} {comment.name}
            </h2>
            <p>{comment.body}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  res.setHeader("Set-Cookie", ["key=value"]);
  console.log(req.headers.cookie);

  const { category } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${category}`
  );

  const data = await response.json();

  return {
    props: {
      comments: data,
      category,
    },
  };
}
