"use client";

import { useToast } from "@/context/ToastContext";
import { useEffect, useState } from "react";

export default function ToastError() {
  const { toast } = useToast();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (toast) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 4500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!toast) return;
  const toastClassName =
    toast?.type !== "error"
      ? "bg-gray-200 text-gray-900"
      : "bg-gray-100 text-black";

  return (
    <div
      className={`fixed z-50 bottom-0 right-2 flex flex-col px-5 py-3 rounded-md text-sm ml-2 sm:ml-0 lg:text-base font-thin border border-white/20 transition-transform ease-linear duration-300 ${
        visible ? "translate-y-0 bottom-2" : "translate-y-full"
      } ${toastClassName} max-w-md`}
    >
      <h1 className="text-base text-pretty font-medium">{toast?.title}</h1>
      <p className="text-base text-pretty">{toast?.message}</p>
    </div>
  );
}
