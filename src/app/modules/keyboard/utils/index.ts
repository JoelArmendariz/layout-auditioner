import { Size } from "../types";

export const getKeyWidthBySize = (size: Size): string => {
  switch (size) {
    case "1u":
      return "4rem";
    case "1.25u":
      return "5rem";
    case "1.5u":
      return "6.25rem";
    case "1.75u":
      return "7.35rem";
    case "2u":
      return "8rem";
    case "2.25u":
      return "9rem";
    case "2.5u":
      return "9.55rem";
    case "6u":
      return "24rem";
    default:
      return "";
  }
};
