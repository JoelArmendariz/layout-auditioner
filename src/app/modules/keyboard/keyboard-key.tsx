import { KeyboardKeyConfig } from "./types";
import { getKeyWidthBySize } from "./utils";
import { Button } from "@chakra-ui/react";

interface KeyboardKeyProps extends Omit<KeyboardKeyConfig, "qwertyValue"> {
  onClick?: () => void;
  focused?: boolean;
}

export const KeyboardKey = ({
  value,
  size,
  label,
  onClick,
  focused,
}: KeyboardKeyProps) => {
  const handleClick = () => onClick?.();

  return (
    <Button
      onClick={handleClick}
      w={getKeyWidthBySize(size)}
      alignItems="start"
      justifyContent="start"
      h={16}
      px={3}
      py={2}
      borderRadius={4}
      outline={focused ? "2px solid #4299e1" : ""}
      outlineOffset="2px"
    >
      {label ?? value}
    </Button>
  );
};
