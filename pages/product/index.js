import React from "react";
import Link from "next/link";

function index() {
  return (
    <div>
      <div>product page</div>
      <br />
      <Link href="/product/1">Product 1</Link>
      <br />
      <Link href="/product/2">Product 2</Link>
      <br />
      <Link href="/product/3">Product 3</Link>
      <br />
    </div>
  );
}

export default index;
