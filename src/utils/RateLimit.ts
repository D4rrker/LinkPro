import { ToastTooManyRequestsType } from "@/types/ToastTooManyRequests";
import { TooManyRequestType } from "@/types/TooManyRequests";

export const handleRateLimitError = async (
  response: Response,
  setErrorMSG: (error: ToastTooManyRequestsType) => void,
) => {
  const errorData: TooManyRequestType = await response.json();
  setErrorMSG({
    boolean: true,
    msg: `${errorData.error}`,
    retryAfter: errorData.retryAfter,
  });

  setTimeout(() => {
    setErrorMSG({ boolean: false, msg: "" });
  }, errorData.retryAfter * 1000);
};
