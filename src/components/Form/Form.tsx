import { FormPropsType } from "@/types/FormProps";

export default function Form({
  handleSubmit,
  url,
  setUrl,
  isLoading,
  errorMSG,
}: FormPropsType) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="form">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <div className="flex-grow">
          <input
            type="url"
            placeholder="Ingresa tu URL aquí"
            value={url}
            onChange={(e) => setUrl(e.target.value.replace(/\s+/g, ""))}
            required
            className="w-full px-3 py-2 rounded-md border text-base font-medium bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-500"
          />
          {errorMSG.boolean && (
            <span className="text-sm font-thin w-min text-red-500">
              {errorMSG.msg}
            </span>
          )}
        </div>
        <button
          type="submit"
          className={`px-4 py-2 min-w-max h-min rounded-md border border-transparent font-semibold bg-purple-600  text-white ${
            isLoading || errorMSG.boolean
              ? "cursor-not-allowed opacity-75"
              : "hover:bg-purple-700"
          }`}
          disabled={isLoading || errorMSG.boolean}
        >
          {isLoading ? "Acortando..." : "Acortar URL"}
        </button>
      </div>
    </form>
  );
}
