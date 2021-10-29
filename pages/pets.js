import React from "react";
import Image from "next/image";
import img from "../public/1.jpg";

export default function pets() {
  return (
    <div>
      <Image src={img} placeholder="blur" alt="pet" width="500" height="420" />

      {["1", "2", "3"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="img" width="500" height="420" />
          </div>
        );
      })}
    </div>
  );
}
