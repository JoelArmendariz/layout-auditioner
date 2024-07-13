import { Button, HStack } from "@chakra-ui/react";
import { AttachmentIcon, DownloadIcon } from "@chakra-ui/icons";
import { LayoutForm } from "./components/layout-form";
import { LayoutPicker } from "@/components/layout-picker";

export const EditorToolbar = () => {
  return (
    <HStack w="100%" justifyContent="space-between">
      <HStack>
        <Button rightIcon={<DownloadIcon />}>Export</Button>
        <Button rightIcon={<AttachmentIcon />}>Import</Button>
      </HStack>
      <HStack>
        <Button variant="outline">Edit</Button>
        <LayoutForm />
        <LayoutPicker />
      </HStack>
    </HStack>
  );
};
