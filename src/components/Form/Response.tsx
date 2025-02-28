import { ResponsePropsType } from "@/types/ResponseProps";
import Button from "../ui/Button";
import { QRCodeCanvas } from "qrcode.react";
import { AnimatePresence, motion } from "framer-motion";
import { downloadQR } from "@/utils/downloadQR";

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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="mt-6 p-4 bg-gray-700 rounded-md border border-gray-600 overflow-hidden"
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
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0, scale: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, scale: 1, height: "auto", marginTop: 32 }}
            exit={{ opacity: 0, scale: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-y-8 justify-center"
          >
            <QRCodeCanvas
              value={shortUrl}
              size={180}
              level="H"
              bgColor="#transparent"
              fgColor="#f0f0f0"
              id="qr-code"
              className="rounded-sm"
            />
            <button
              onClick={() => downloadQR("qr-code")}
              title="Descargar QR"
              aria-label="Descargar QR"
              className="font-medium px-4 py-2 rounded-md w-full bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Descargar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
