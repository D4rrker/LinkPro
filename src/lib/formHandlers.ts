import { fakeFetch } from "@/services/fetchServices";
import HandleSubmitFormType from "@/types/HandleSubmitForm";
import ToggleQRCodeType from "@/types/ToggleQRCode";
// import { shortenUrl } from "@/services/fetchServices";
// import { validateResponse } from "@/utils/Validate";
// import { handleRateLimitError } from "@/utils/RateLimit";

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
    `Se ha copiado la siguiente URL al portapapeles:`,
    "success",
    `${shortUrl}`
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
    // const response = await shortenUrl(url);
    // const validation = await validateResponse(response);

    // if (validation === "rate_limit") {
    //   await handleRateLimitError(response, setErrorMSG);
    // }

    // const { short_id } = validation;

    // Petición falsa
    const { short_id, data } = (await fakeFetch()) as {
      short_id: string;
      data: string;
    };
    const shortUrl = `http://localhost:3000/${short_id}`;

    setShortUrl(shortUrl);
    addUrl({
      id: short_id,
      originalUrl: url,
      shortUrl,
      createdAt: new Date(),
    });
    setErrorMSG({
      boolean: true,
      msg: data,
    });
  } catch (error) {
    console.error("❌ Error en handleSubmit:", error);

    setErrorMSG({
      boolean: true,
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
