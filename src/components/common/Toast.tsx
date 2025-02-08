"use client";

import { useToast } from "@/context/ToastContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ToastError() {
  const { toast } = useToast();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (toast) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 7500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!toast) return;
  const toastClassName =
    toast?.type !== "error" ? "bg-gray-900" : "bg-gray-100 text-black";

  return (
    <div
      className={`fixed z-50 bottom-0 right-2 flex items-center gap-x-2 px-5 py-3 rounded-md text-sm ml-2 sm:ml-0 lg:text-base font-thin border border-white/20 transition-transform ease-linear duration-300 ${
        visible ? "translate-y-0 bottom-2" : "translate-y-full"
      } ${toastClassName}`}
    >
      <span className="text-gray-200">
        {toast?.message}{" "}
        <Link
          href={toast?.copyShortUrl || ""}
          className="text-purple-400 hover:underline"
          target="_blank"
        >
          <b>{toast?.copyShortUrl}</b>
        </Link>
      </span>
    </div>
  );
}
