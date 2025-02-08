import { ToastTooManyRequestsType } from "./ToastTooManyRequests";
import { SavedUrlsType } from "./SavedUrls";

export default interface HandleSubmitFormType {
  eve: React.FormEvent;
  url: string;
  setIsLoading: (value: boolean) => void;
  setShortUrl: (value: string) => void;
  setErrorMSG: (error: ToastTooManyRequestsType) => void;
  addUrl: (value: SavedUrlsType) => void;
}
