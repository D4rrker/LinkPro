import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ToastProvider } from "@/context/ToastContext";
import Toast from "@/components/common/Toast";
import { SavedUrlsProvider } from "@/context/UrlsContext";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Acortador de enlaces gratuito | LinkPro",
  description:
    "Acorta enlaces largos en segundos con LinkPro. Genera URLs cortas y un código QR para un acceso rápido y fácil desde cualquier dispositivo.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`font-sans antialiased grid grid-rows-main-structure min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100`}
      >
        <ToastProvider>
          <Toast />
          <Header />
          <SavedUrlsProvider>{children}</SavedUrlsProvider>
          <Footer />
        </ToastProvider>
        <Analytics />
      </body>
    </html>
  );
}
