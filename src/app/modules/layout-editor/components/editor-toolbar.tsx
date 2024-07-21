import { Button, HStack } from "@chakra-ui/react";
import { AttachmentIcon, DownloadIcon } from "@chakra-ui/icons";
import { LayoutPicker } from "@/components/layout-picker";
import { LayoutForm } from "./layout-form";

interface EditorToolbarProps {
  onSave?: () => void;
  onCancel?: () => void;
  isEditing?: boolean;
}

export const EditorToolbar = ({
  isEditing,
  onSave,
  onCancel,
}: EditorToolbarProps) => {
  return isEditing ? (
    <HStack w="100%" justifyContent="end">
      <Button colorScheme="blue" variant="secondary" onClick={onCancel}>
        Cancel
      </Button>
      <Button colorScheme="blue" onClick={onSave}>
        Save
      </Button>
    </HStack>
  ) : (
    <HStack w="100%" justifyContent="space-between">
      <HStack>
        <Button
          colorScheme="blue"
          variant="outline"
          rightIcon={<DownloadIcon />}
        >
          Export
        </Button>
        <Button
          colorScheme="blue"
          variant="outline"
          rightIcon={<AttachmentIcon />}
        >
          Import
        </Button>
      </HStack>
      <HStack>
        <LayoutForm />
        <LayoutPicker />
      </HStack>
    </HStack>
  );
};
