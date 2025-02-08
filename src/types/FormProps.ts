export interface FormPropsType {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  errorMSG: { boolean: boolean; msg: string };
}
