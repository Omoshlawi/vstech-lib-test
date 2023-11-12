
interface ImagePickerProps {
    size?: number;
    backgroundColor?: string;
    iconColor?: string;
    image?: string;
    onImageChange?: (image: string) => void;
    onRequestDelete?: () => void;
  }

interface FormImagePickerProps {
    size?: number;
    backgroundColor?: string;
    iconColor?: string;
    name: string;
  }

  interface ImagePickerEditButtonProps {
    size: number;
    backgroundColor?: string;
    iconColor?: string;
    onPress?: () => void;
  }