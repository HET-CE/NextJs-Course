import React from "react";
import Link from "next/link";
function first() {
  return (
    <div>
      <h3>blog page</h3>
      <br />
      <Link href="/">Home</Link>
      <br />
      <Link href="/blog/first">First</Link>
      <br />
      <Link href="/blog//second">Second</Link>
      <br />
    </div>
  );
}

export default first;
