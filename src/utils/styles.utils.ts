// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getClassStyles = (variant: string, styles: any) => {
  switch (variant) {
    case "primary":
      return styles?.primary;
    case "error":
      return styles?.error;
    case "warning":
      return styles?.warning;
    case "success":
      return styles?.success;
    default:
      return styles?.default;
  }
};
