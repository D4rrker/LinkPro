import { Shield, Folder, QrCode } from "lucide-react";
import FeatureType from "@/types/Feature";

export const features: FeatureType[] = [
  {
    name: "Privacidad y control",
    description:
      "Tus enlaces son gestionados con total seguridad, garantizando tu privacidad.",
    icon: Shield,
  },
  {
    name: "Gestión sencilla",
    description: "Administra tus enlaces de manera fácil y rápida.",
    icon: Folder,
  },
  {
    name: "Generación de códigos QR",
    description:
      "Crea códigos QR para tus enlaces de manera rápida y sencilla.",
    icon: QrCode,
  },
];
