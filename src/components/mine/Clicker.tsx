"use client";
import React, { useRef } from "react";
import "../../styles/Clicker.css";
import logo from "../../../public/tonloadpic.png";
import Image from "next/image";

const Clicker = () => {
  // Explicitly type the ref as HTMLDivElement or null
  const coinRef = useRef<HTMLDivElement>(null);
  const moneyAnimationRef = useRef<HTMLDivElement>(null);
  const startPop = () => {
    if (coinRef.current) {
      coinRef.current.style.transform = "scale(1.1)"; // Scale up slightly when pressed
    }
  };
  const endPop = () => {
    if (coinRef.current) {
      coinRef.current.style.transform = "scale(1)"; // Scale up slightly when pressed
    }
  };

  const addOne = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    event.preventDefault();

    if (coinRef.current && moneyAnimationRef.current) {
      const rect = coinRef.current.getBoundingClientRect();
      const x =
        event.type === "touchend"
          ? (event as React.TouchEvent).changedTouches[0].clientX - rect.left
          : (event as React.MouseEvent).clientX - rect.left;
      const y =
        event.type === "touchend"
          ? (event as React.TouchEvent).changedTouches[0].clientY - rect.top
          : (event as React.MouseEvent).clientY - rect.top;

      const moneyText = "+1";

      const moneyAnim = document.createElement("p");
      moneyAnim.innerHTML = moneyText;
      moneyAnim.classList.add("moneyAnimation");

      moneyAnim.style.left = `${x - 15}px`;
      moneyAnim.style.top = `${y - 30}px`;

      moneyAnimationRef.current.appendChild(moneyAnim);

      setTimeout(() => {
        moneyAnim.remove();
      }, 1000);
    }
  };
  return (
    <>
      <div
        className="text-center relative clicker flex justify-center items-center clickerlogo"
        style={{
          maxWidth: "40vw",
          width: "40vw",
          height: '40vw',
          borderRadius: "50%",
          boxShadow: "0 0 50px #0490e0",
          transition: "transform 0.2s",
        }}
        onMouseDown={startPop}
        onMouseUp={endPop}
        onTouchStart={startPop}
        onTouchEnd={endPop}
        onPointerDown={startPop} // Added pointer events
        onPointerUp={endPop} // Added pointer events
        onClick={addOne}
        ref={coinRef}
      >
        
        <div
          ref={moneyAnimationRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        ></div>
      </div>
    </>
  );
};

export default Clicker;
