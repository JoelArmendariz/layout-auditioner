import { twJoin, twMerge } from "tailwind-merge";

interface TypingTestCharacterProps {}

export const TypingTestCharacter = () => {
  return (
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
  );
};
