"use client";

import { useSavedUrls } from "@/context/UrlsContext";
import { Copy, Trash2 } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";
import { copyToClipboard } from "@/lib/formHandlers";
import { useToast } from "@/context/ToastContext";

export default function SavedUrls() {
  const { savedUrls, deleteUrl } = useSavedUrls();
  const { toast, showToast } = useToast();

  if (savedUrls.length === 0) return;

  return (
    <div className="mt-24 p-6 rounded-md shadow-lg border bg-gray-800 border-gray-700">
      <h2 className="text-3xl font-bold mb-4">URLs Guardadas</h2>
      <div>
        <ul className="flex flex-col gap-y-6">
          {savedUrls.length > 0 &&
            savedUrls.map((url, index) => (
              <li key={index} className="bg-gray-700 p-4 rounded-md">
                <div className="flex flex-col gap-y-8 sm:justify-between sm:items-center sm:flex-row">
                  <div>
                    <p className="text-sm text-gray-300 truncate w-60 md:w-96">
                      {url.originalUrl}
                    </p>
                    <Link
                      href={url.shortUrl}
                      target="_blank"
                      className="text-purple-400 hover:text-purple-300 text-base mt-1 inline-flex items-center"
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
                <p className="text-xs text-gray-500 mt-2">
                  Creado el {new Date(url.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
