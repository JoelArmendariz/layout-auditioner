import { Box, Text } from "@chakra-ui/react";

interface TypingTestCharacterProps {
  value: string;
  highlighted?: boolean;
}

export const TypingTestCharacter = ({
  value,
  highlighted,
}: TypingTestCharacterProps) => {
  return (
    <Box pos="relative">
      {value === " " ? (
        <Text as="span">&nbsp;</Text>
      ) : (
        <Text as="span" fontSize="2xl" opacity={highlighted ? "" : "50%"}>
          {value}
        </Text>
      )}
    </Box>
  );
};
