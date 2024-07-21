"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack px={4} py={2} h="3rem">
      <Text size="md" cursor="pointer" onClick={() => router.push("/")}>
        LAYOUT AUDITIONER
      </Text>
      <HStack ml="auto" px={2} gap={4}>
        <Text
          fontSize="md"
          cursor="pointer"
          onClick={() => router.push("/test")}
        >
          TEST
        </Text>
        <Text
          fontSize="md"
          cursor="pointer"
          onClick={() => router.push("/editor")}
        >
          EDITOR
        </Text>
      </HStack>
      <IconButton
        size="sm"
        borderRadius="100%"
        onClick={toggleColorMode}
        aria-label="dark-mode-toggle"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      />
    </HStack>
  );
};
