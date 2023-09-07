"use client";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const handleClick = () => router.push("/");

  //
  return (
    <>
      <h1>The About Page</h1>
      <button onClick={handleClick}>Go back to home</button>
    </>
  );
};

export default About;
