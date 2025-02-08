"use client";

import { ToastContextType, ToastType } from "@/types/Toast";
import { createContext, ReactNode, useContext, useState } from "react";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastType | null>(null);

  const showToast = (
    message: string,
    type: "success" | "error" | "info",
    copyShortUrl?: string,
  ) => {
    setToast({ message, type, copyShortUrl });
    setTimeout(() => setToast(null), 8000);
  };

  const hideToast = () => setToast(null);

  return (
    <ToastContext.Provider value={{ toast, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast debe estar dentro de ToastProvider");
  }
  return context;
};
