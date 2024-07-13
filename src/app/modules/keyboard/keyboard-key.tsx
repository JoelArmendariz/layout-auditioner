import { KeyboardKeyConfig } from "./types";
import { getKeyWidthBySize } from "./utils";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export const KeyboardKey = ({ value, size, label }: KeyboardKeyConfig) => {
  const bg = useColorModeValue("gray.400", "gray.700");

  return (
    <Box
      bg={bg}
      w={getKeyWidthBySize(size)}
      h={16}
      px={3}
      py={1}
      borderRadius={4}
    >
      <Text>{label ?? value}</Text>
    </Box>
  );
};
