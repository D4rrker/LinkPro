export default function NotFound({ msg }: { msg: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="py-4 px-6 rounded-sm border-l-2 border-l-red-500">
        <span>{msg}</span>
      </div>
    </div>
  );
}
