import { useRouter } from "next/router";
import React from "react";

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 1) {
    return <h1>Viewing docs for Feature {params[0]}</h1>;
  } else if (params.length === 2) {
    console.log(params);
    return (
      <h1>
        Viewing docs for feature {params[0]} and for concept {params[1]}
      </h1>
    );
  }
  return <h1>this is Docs page.</h1>;
}

export default Doc;
