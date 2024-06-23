import { twMerge } from "tailwind-merge";
import { KeyboardKeyConfig } from "./types";
import { getKeyWidthBySize } from "./utils";

export const KeyboardKey = ({ value, size, label }: KeyboardKeyConfig) => {
  return (
    <div
      style={{ width: getKeyWidthBySize(size) }}
      className={twMerge("flex h-16 rounded px-3 py-1 shadow-md bg-gray")}
    >
      <span>{label ?? value}</span>
    </div>
  );
};
