import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/context/ToastContext";
import Toast from "@/components/Toast";
import { SavedUrlsProvider } from "@/context/UrlsContext";

export const metadata: Metadata = {
  title: "LinkPro",
  description:
    "Convierte enlaces largos en URLs cortas y fáciles de compartir con nuestro acortador de enlaces. Protege a los usuarios con detección de enlaces maliciosos y mejora la experiencia de navegación. ¡Prueba ahora!",
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
      </body>
    </html>
  );
}
