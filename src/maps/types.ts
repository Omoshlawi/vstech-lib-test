interface Coordinate{
    latitude: number,
    longitude: number,
}


interface LocationPickerProps {
    location?: Coordinate;
    onLocationChange: (location: Coordinate) => void;
    labelExtractor?: (location: Coordinate) => string;
    label?: string;
    prefixIcon?: string;
    surfixIcon?: string;
    onSurfixIconPressed?: () => void;
    onPrefixIconPressed?: () => void;
    variant?: "flat" | "outlined";
    error?: string;
    helpText?: string;
    confirmDialogMessageExtractor?: (location: Coordinate)=>string,
    calloutTitle?:string
    descriptionExtractor?:(location: Coordinate)=>string
  }