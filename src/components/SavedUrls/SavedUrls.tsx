"use client";

import { useSavedUrls } from "@/context/UrlsContext";
import { Copy, Trash2 } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";
import { copyToClipboard } from "@/lib/formHandlers";
import { useToast } from "@/context/ToastContext";
import { motion, AnimatePresence } from "framer-motion";

export default function SavedUrls() {
  const { savedUrls, deleteUrl } = useSavedUrls();
  const { toast, showToast } = useToast();

  return (
    <motion.div
      className="mt-24 p-6 rounded-md shadow-lg border transition-all bg-gray-800 border-gray-700"
      layout
    >
      <h2 className="text-3xl font-bold mb-4">URLs Guardadas</h2>
      <div>
        <motion.ul
          className="flex flex-col"
          style={{ overflow: "hidden" }}
          layout
        >
          <AnimatePresence>
            {savedUrls.length > 0 ? (
              savedUrls.map((url) => (
                <motion.li
                  key={url.id}
                  className="bg-gray-700 p-4 rounded-md"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0, padding: 0, margin: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden", marginBottom: "1rem" }}
                >
                  <div className="flex flex-col gap-y-8 sm:justify-between sm:items-center sm:flex-row">
                    <div>
                      <p className="text-base text-gray-100 truncate w-60 md:w-96">
                        {url.originalUrl}
                      </p>
                      <Link
                        href={url.shortUrl}
                        target="_blank"
                        className="text-purple-300 hover:underline text-base font-medium md:text-lg mt-1 inline-flex items-center"
                      >
                        {url.shortUrl}
                      </Link>
                    </div>
                    <div className="flex space-x-2 justify-evenly sm:justify-start">
                      <Button
                        ItemSVG={Copy}
                        buttonID="copy"
                        handlerOnClick={() =>
                          copyToClipboard({ shortUrl: url.shortUrl, showToast })
                        }
                        disableBtn={toast}
                      />
                      <Button
                        ItemSVG={Trash2}
                        buttonID="trash"
                        handlerOnClick={() => deleteUrl(url.id)}
                      />
                    </div>
                  </div>
                  <p className="mt-10 text-sm text-gray-300 sm:mt-2">
                    Creado el {new Date(url.createdAt).toLocaleDateString()}
                  </p>
                </motion.li>
              ))
            ) : (
              <p className="text-gray-400">No hay URLs guardadas</p>
            )}
          </AnimatePresence>
        </motion.ul>
      </div>
    </motion.div>
  );
}
