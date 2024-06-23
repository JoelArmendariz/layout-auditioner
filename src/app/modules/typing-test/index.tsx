"use client";

import { useEffect, useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";

export const TypingTest = () => {
  const [characterIndex, setCharacterIndex] = useState(0);

  const text =
    "something words words other words more things to type something words words other words more things to type something words words other words more things to type something words words other words more things to type something words words other words more things to type something words words other words more things to type something words words other words more things to type something words words other words more things to type something words words other words more things to type something words words other words more things to type something words words other words more things to type something words words other words more things to type something words words other words more things to type something words words other words more things to type something words words other words more things to type something words words other words more things to type";

  useEffect(() => {
    const listener = () => setCharacterIndex((prev) => prev + 1);
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, []);

  return (
    <div
      className={twJoin(
        "relative w-[40rem] h-96 overflow-hidden p-4",
        "font-[Roboto Mono] text-white-dark",
        "flex flex-row flex-wrap",
      )}
    >
      {text.split("").map((character, i) => (
        <div key={i} className="relative">
          <span
            className={twJoin(
              "text-3xl",
              i < characterIndex ? "" : "opacity-50",
              "transition-all duration-100",
            )}
          >
            {character === " " ? <span>&nbsp;</span> : character}
          </span>
          {characterIndex === i ? (
            <div
              className={twMerge(
                "absolute bg-primary w-[3px] h-9 top-0.5 animate-pulse",
              )}
            />
          ) : null}
        </div>
      ))}
      <div className="absolute bottom-0 h-12 w-full bg-[linear-gradient(to_bottom,rgba(45,50,70,0),rgb(45,50,70))]" />
    </div>
  );
};
