"use client";

import { SavedUrlsType, SevedUrlsContextType } from "@/types/SavedUrls";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

const SavedUrlsContext = createContext<SevedUrlsContextType | null>(null);

export const SavedUrlsProvider = ({ children }: { children: ReactNode }) => {
  const [savedUrls, setSavedUrls] = useState<SavedUrlsType[]>([]);
  useEffect(() => {
    const checkIfExist = localStorage.getItem("savedURLS");
    if (!checkIfExist) {
      localStorage.setItem("savedURLS", JSON.stringify([]));
    }
    setSavedUrls(JSON.parse(localStorage.getItem("savedURLS") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("savedURLS", JSON.stringify(savedUrls));
  }, [savedUrls]);

  const addUrl = (newUrl: SavedUrlsType) => {
    setSavedUrls((prevUrls) => [...prevUrls, newUrl]);
  };

  const deleteUrl = (id: string) => {
    const updatedSavedUrls = savedUrls.filter((url) => url.id !== id);

    setSavedUrls(updatedSavedUrls);
  };

  return (
    <SavedUrlsContext.Provider value={{ savedUrls, addUrl, deleteUrl }}>
      {children}
    </SavedUrlsContext.Provider>
  );
};

export const useSavedUrls = () => {
  const context = useContext(SavedUrlsContext);
  if (!context) {
    throw new Error("useSavedUrls debe estar dentro de SavedUrlsProvider");
  }
  return context;
};
