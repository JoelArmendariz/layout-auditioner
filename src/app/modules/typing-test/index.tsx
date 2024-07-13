"use client";

import { useEffect, useState } from "react";
import { TypingTestCharacter } from "./typing-test-character";
import { Box } from "@chakra-ui/react";

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
    <Box
      display="flex"
      flexWrap="wrap"
      pos="relative"
      h={32}
      overflow="hidden"
      w="100%"
      maxW="56rem"
    >
      {text.split("").map((character, i) => (
        <Box key={i}>
          <TypingTestCharacter
            value={character}
            highlighted={i < characterIndex}
          />
          {i === characterIndex ? (
            <Box
              pos="absolute"
              bg="blue.600"
              w="3px"
              h={8}
              top={0.5}
              className="animate-pulse"
            />
          ) : null}
        </Box>
      ))}
    </Box>
  );
};
