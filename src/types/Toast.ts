export interface ToastType {
  message: string;
  type: "success" | "error" | "info";
  title: string;
}

export interface ToastContextType {
  toast: ToastType | null;
  showToast: (
    message: string,
    type: "success" | "error" | "info",
    title: string
  ) => void;
  hideToast: () => void;
}
