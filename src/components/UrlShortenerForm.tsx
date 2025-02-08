"use client";

import {
  copyToClipboard,
  handleSubmit,
  toggleQRCode,
} from "@/lib/formHandlers";
import { ClipboardCopy, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { ToastTooManyRequestsType } from "@/types/ToastTooManyRequests";
import { defaultData } from "@/constants/defaultDataErrorRequest";
import Button from "./ui/Button";
import { useToast } from "@/context/ToastContext";
import { useSavedUrls } from "@/context/UrlsContext";

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

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 border-gray-700 shadow-lg rounded-lg border">
      <div className="p-6">
        {/* Mejorable, hacer un componente con 'id:form' */}
        <form
          onSubmit={(eve) =>
            handleSubmit({
              eve,
              url,
              setIsLoading,
              setShortUrl,
              setErrorMSG,
              addUrl,
            })
          }
          className="space-y-4"
          id="form"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <div className="flex-grow">
              <input
                type="url"
                placeholder="Ingresa tu URL aquí"
                value={url}
                onChange={(e) => setUrl(e.target.value.replace(/\s+/g, ""))}
                required
                className="w-full px-3 py-2 rounded-md border text-base font-medium bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-500"
              />
              {errorMSG.boolean && (
                <span className="text-sm font-thin w-min text-red-500">
                  {errorMSG.msg}
                </span>
              )}
            </div>
            <button
              type="submit"
              className={`px-4 py-2 min-w-max h-min rounded-md border border-transparent font-semibold bg-purple-600  text-white ${
                isLoading || errorMSG.boolean
                  ? "cursor-not-allowed opacity-75"
                  : "hover:bg-purple-700"
              }`}
              disabled={isLoading || errorMSG.boolean}
            >
              {isLoading ? "Acortando..." : "Acortar URL"}
            </button>
          </div>
        </form>
        {shortUrl && (
          /* Mejorable, hacer un componente con 'id:response' */
          <div
            className="mt-6 p-4 bg-gray-700 rounded-md border border-gray-600"
            id="response"
          >
            <p className="text-sm font-medium text-gray-300 mb-2">
              Tu URL acortada:
            </p>
            <div className="flex flex-col gap-y-6 md:space-x-2 md:flex-row md:items-center">
              <input
                value={shortUrl}
                readOnly
                className="flex-grow px-3 py-2 rounded-md border text-base font-medium bg-gray-800 text-gray-100 border-gray-600"
              />
              {/* Mejorable, cambiar como se renderizan los botones */}
              <div className="flex gap-x-4 min-w-max h-auto justify-evenly">
                <Button
                  ItemSVG={ClipboardCopy}
                  handlerOnClick={() =>
                    copyToClipboard({ shortUrl, showToast })
                  }
                  buttonID="copy"
                  disableBtn={toast}
                />
                <Button
                  ItemSVG={QrCode}
                  handlerOnClick={() => toggleQRCode({ showQR, setShowQR })}
                  buttonID="qr"
                />
              </div>
            </div>
            {showQR && (
              <div className="mt-4 flex justify-center">
                <QRCodeSVG
                  value={shortUrl}
                  size={128}
                  bgColor="#1F2937"
                  fgColor="#F3F4F6"
                />
              </div>
            )}
            <p className="text-xs text-gray-400 mt-6 md:mt-2">
              Este enlace acortado caducará en 30 días.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
