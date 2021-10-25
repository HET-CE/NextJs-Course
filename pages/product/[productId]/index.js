import React from "react";
import { useRouter } from "next/router";

// This file for .../product/id

function productdetail() {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1>Details about product {productId}</h1>;
}

export default productdetail;
