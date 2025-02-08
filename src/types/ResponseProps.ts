import { ToastType } from "./Toast";

export interface ResponsePropsType {
  shortUrl: string;
  showToast: (
    message: string,
    type: "success" | "error" | "info",
    copyShortUrl?: string,
  ) => void;
  showQR: boolean;
  setShowQR: React.Dispatch<React.SetStateAction<boolean>>;
  toast: ToastType | null;
  copyToClipboard: (props: {
    shortUrl: string;
    showToast: (
      message: string,
      type: "success" | "error" | "info",
      copyShortUrl?: string,
    ) => void;
  }) => void;
  toggleQRCode: (props: {
    showQR: boolean;
    setShowQR: React.Dispatch<React.SetStateAction<boolean>>;
  }) => void;
  ClipboardCopy: React.ComponentType;
  QrCode: React.ComponentType;
}
