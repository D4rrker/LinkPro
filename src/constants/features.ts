import { QrCode, Rocket, Zap } from "lucide-react";
import FeatureType from "@/types/Feature";

export const features: FeatureType[] = [
  {
    name: "Rápido y Eficiente",
    description: "Acorta y comparte enlaces en cuestión de segundos.",
    icon: Zap,
  },
  {
    name: "Sin Registro Necesario",
    description: "Utiliza la herramienta sin necesidad de crear una cuenta.",
    icon: Rocket,
  },
  {
    name: "Generación de códigos QR",
    description:
      "Crea códigos QR para tus enlaces de manera rápida y sencilla.",
    icon: QrCode,
  },
];
