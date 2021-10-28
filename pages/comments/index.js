function CommentList({ comments }) {
  return (
    <>
      <h1>List of News Articles</h1>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h2>
              {comment.id} {comment.name} | {comment.email}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default CommentList;

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return {
    props: {
      comments: data,
    },
  };
}
