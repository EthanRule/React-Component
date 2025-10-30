"use client";
import Image from "next/image";
import { ReactNode } from "react";
import { useState } from "react";

export default function Home() {
  return <Headline />;
}

const Headline = () => {
  const [greeting, setGreeting] = useState("Hello function component!");
  return (
    <div>
      <h1>{greeting}</h1>;
      <input
        type="text"
        value="greeting"
        onChange={(event) => setGreeting(event.target.value)}
      ></input>
    </div>
  );
};
