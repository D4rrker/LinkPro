import { ToastTooManyRequestsType } from "./ToastTooManyRequests";

export interface FormPropsType {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  infoMSG: ToastTooManyRequestsType;
}
