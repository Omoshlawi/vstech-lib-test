interface DateTimePickerProps {
    date: Date;
    onDateChanged: (date: Date) => void;
    formater?: (date: Date) => string;
    label?: string;
    prefixIcon?: string;
    surfixIcon?: string;
    onSurfixIconPressed?: () => void;
    onPrefixIconPressed?: () => void;
    mode?: "date" | "time" | "datetime" | "countdown";
    display?: "spinner" | "compact" | "default";
    variant?: "flat" | "outlined";
    error?: string;
    helpText?: string;
  }
interface FormDateTimePickerProps {
    name: string
    formater?: (date: Date) => string;
    label?: string;
    prefixIcon?: string;
    surfixIcon?: string;
    onSurfixIconPressed?: () => void;
    onPrefixIconPressed?: () => void;
    mode?: "date" | "time" | "datetime" | "countdown";
    display?: "spinner" | "compact" | "default";
    variant?: "flat" | "outlined";
    error?: string;
    helpText?: string;
  }
