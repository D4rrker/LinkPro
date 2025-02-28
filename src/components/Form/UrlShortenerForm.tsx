"use client";

import {
  copyToClipboard,
  handleSubmit,
  toggleQRCode,
} from "@/lib/formHandlers";
import { ClipboardCopy, QrCode } from "lucide-react";
import { useState } from "react";
import { ToastTooManyRequestsType } from "@/types/ToastTooManyRequests";
import { defaultData } from "@/constants/defaultDataErrorRequest";
import { useToast } from "@/context/ToastContext";
import { useSavedUrls } from "@/context/UrlsContext";
import Form from "./Form";
import Response from "./Response";
import { AnimatePresence, motion } from "framer-motion";

export default function UrlShortenerForm() {
  /* Mejorable, usar un solo 'useState' */
  const [url, setUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showQR, setShowQR] = useState<boolean>(false);
  const [errorMSG, setErrorMSG] =
    useState<ToastTooManyRequestsType>(defaultData);

  const { showToast, toast } = useToast();
  const { addUrl } = useSavedUrls();

  const handleFormSubmit = (eve: React.FormEvent<HTMLFormElement>) => {
    handleSubmit({
      eve,
      url,
      setIsLoading,
      setShortUrl,
      setErrorMSG,
      addUrl,
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 border-gray-700 shadow-lg rounded-lg border">
      <div className="p-6">
        <Form
          handleSubmit={handleFormSubmit}
          url={url}
          setUrl={setUrl}
          isLoading={isLoading}
          infoMSG={errorMSG}
        />
        <AnimatePresence>
          {shortUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Response
                shortUrl={shortUrl}
                showToast={showToast}
                showQR={showQR}
                setShowQR={setShowQR}
                toast={toast}
                copyToClipboard={copyToClipboard}
                toggleQRCode={toggleQRCode}
                ClipboardCopy={ClipboardCopy}
                QrCode={QrCode}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
