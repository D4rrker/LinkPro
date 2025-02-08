export interface ToastType {
  message: string;
  type: "success" | "error" | "info";
  copyShortUrl?: string;
}

export interface ToastContextType {
  toast: ToastType | null;
  showToast: (
    message: string,
    type: "success" | "error" | "info",
    copyShortUrl?: string,
  ) => void;
  hideToast: () => void;
}
