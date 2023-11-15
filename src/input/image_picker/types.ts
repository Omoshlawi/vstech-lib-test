
interface ImagePickerProps {
  label?: string;
  error?:string;
    size?: number;
    backgroundColor?: string;
    iconColor?: string;
    image?: string;
    onImageChange?: (image: string) => void;
    onRequestDelete?: () => void;
  }

interface FormImagePickerProps {
  label?: string;
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