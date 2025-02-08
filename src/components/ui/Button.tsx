import { ToastType } from "@/types/Toast";

export default function Button({
  ItemSVG,
  handlerOnClick,
  buttonID,
  disableBtn,
}: {
  ItemSVG: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  handlerOnClick: () => void;
  buttonID: string;
  disableBtn?: ToastType | null;
}) {
  const takeBoolean = buttonID === "copy" && disableBtn != null;

  return (
    <button
      id={buttonID}
      onClick={handlerOnClick}
      className={`flex flex-grow max-w-20 justify-center py-4 px-6 border rounded-sm transition-colors md:p-2 bg-purple-400/10 text-purple-400 border-purple-400 ${
        !takeBoolean ? "hover:bg-purple-400 hover:text-gray-900" : "opacity-30"
      }`}
      disabled={takeBoolean}
      aria-label={`${buttonID !== "copy" ? "Eliminar" : "Copiar"} esta URL`}
      title={`${buttonID !== "copy" ? "Eliminar" : "Copiar"}`}
    >
      <ItemSVG className="h-6 w-6 md:h-4 md:w-4" />
    </button>
  );
}
