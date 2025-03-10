import HandleSubmitFormType from "@/types/HandleSubmitForm";
import ToggleQRCodeType from "@/types/ToggleQRCode";
import { shortenUrl } from "@/services/fetchServices";
import { validateResponse } from "@/utils/Validate";
import { handleRateLimitError } from "@/utils/RateLimit";

export const copyToClipboard = ({
  shortUrl,
  showToast,
}: {
  shortUrl: string;
  showToast: (
    message: string,
    type: "success" | "error" | "info",
    copyShortUrl: string
  ) => void;
}) => {
  navigator.clipboard.writeText(shortUrl);
  showToast(
    "Se ha copiado el enlace acortado al portapapeles.",
    "success",
    `Enlace acortado copiado`
  );
};

export const toggleQRCode = ({ showQR, setShowQR }: ToggleQRCodeType) => {
  setShowQR(!showQR);
};

export const handleSubmit = async ({
  eve,
  url,
  setIsLoading,
  setShortUrl,
  setErrorMSG,
  addUrl,
}: HandleSubmitFormType) => {
  eve.preventDefault();
  setIsLoading(true);

  try {
    const response = await shortenUrl(url);
    const validation = await validateResponse(response);

    if (validation === "rate_limit") {
      await handleRateLimitError(response, setErrorMSG);
      return;
    }

    const { short_id } = validation;

    const shortUrl = `https://linkpro.li/${short_id}`;

    setShortUrl(shortUrl);
    addUrl({
      id: short_id,
      originalUrl: url,
      shortUrl,
      createdAt: new Date(),
    });
    setErrorMSG({
      boolean: true,
      isError: false,
      msg: "¡La URL se acortó correctamente!",
    });
  } catch (error) {
    console.error("❌ Error en handleSubmit:", error);

    setErrorMSG({
      boolean: true,
      isError: true,
      msg: error instanceof Error ? error.message : "Error desconocido",
    });
  } finally {
    setIsLoading(false);
  }
};

export const generateFakeShortId = () => {
  const shortId = crypto.randomUUID().slice(0, 8);
  return shortId;
};
