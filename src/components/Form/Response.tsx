import { ResponsePropsType } from "@/types/ResponseProps";
import Button from "../ui/Button";
import { QRCodeSVG } from "qrcode.react";

export default function Response({
  shortUrl,
  showToast,
  showQR,
  setShowQR,
  toast,
  ClipboardCopy,
  copyToClipboard,
  QrCode,
  toggleQRCode,
}: ResponsePropsType) {
  return (
    <div
      className="mt-6 p-4 bg-gray-700 rounded-md border border-gray-600"
      id="response"
    >
      <p className="text-sm font-medium text-gray-300 mb-2">Tu URL acortada:</p>
      <div className="flex flex-col gap-y-6 md:space-x-2 md:flex-row md:items-center">
        <input
          value={shortUrl}
          readOnly
          className="flex-grow px-3 py-2 rounded-md border text-base font-medium bg-gray-800 text-gray-100 border-gray-600"
        />
        <div className="flex gap-x-4 min-w-max h-auto justify-evenly">
          <Button
            ItemSVG={ClipboardCopy}
            handlerOnClick={() => copyToClipboard({ shortUrl, showToast })}
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
  );
}
