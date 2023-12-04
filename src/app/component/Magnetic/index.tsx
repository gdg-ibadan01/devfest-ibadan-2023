"use client"
import React, { useEffect, useRef, FC } from "react";
import gsap from "gsap";

interface iMagnetic {
  children: any;
}

const Magnetic: FC<iMagnetic> = ({ children }) => {
  const magnetic = useRef(null);

  useEffect(() => {
    // const currentElement = magnetic.current as HTMLElement | null;
    const currentElement = magnetic.current as any;
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    currentElement?.addEventListener("mousemove", (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        currentElement?.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    });
    currentElement?.addEventListener("mouseleave", (e: MouseEvent) => {
      xTo(0);
      yTo(0);
    });
  }, [children]);

  return React.cloneElement(children, { ref: magnetic });
};

export default Magnetic;
