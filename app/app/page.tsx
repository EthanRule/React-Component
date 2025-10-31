"use client";
import Image from "next/image";
import { ReactNode } from "react";
import { useState, useEffect, memo } from "react";

export default function Home() {
  const [greeting, setGreeting] = useState("Hello React!");
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setTimeout(() => setCount((currentCount) => currentCount + 1), 1000);
  };

  const handleDecrement = () => {
    setTimeout(() => setCount((currentCount) => currentCount - 1), 1000);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setGreeting(event.target.value);

  return (
    <div>
      <input type="text" onChange={handleChange} />

      <Count count={count} />

      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

interface CountProps {
  count: number;
}

const Count = ({ count }: CountProps) => {
  console.log(`does it (re)render?`);
  return <h1>{count}</h1>;
};
