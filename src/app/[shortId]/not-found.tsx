import NotFound from "@/components/common/NotFound";

export default function notFound() {
  return (
    <div>
      <NotFound msg={`No se ha encontrado la URL solicitada.`} />
    </div>
  );
}
