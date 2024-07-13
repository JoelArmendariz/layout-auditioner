import { Layout } from "@/app/modules/keyboard/types";
import { Code, Text, VStack } from "@chakra-ui/react";

interface LayoutPreviewProps {
  layout: Layout;
}

export const LayoutPreview = ({ layout }: LayoutPreviewProps) => {
  const keys = Object.keys(layout.keyMap);
  return (
    <VStack>
      {keys.map((char, i) => (
        <Text key={i}>{char}</Text>
      ))}
      <Code>q w e r t y u i o p [ ] \</Code>
      <Code>a s d f g h j k l ; &apos;</Code>
      <Code>z x c v b n m , . /</Code>
    </VStack>
  );
};
