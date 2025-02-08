import { getOriginalUrl } from "@/services/fetchServices";

export default async function ShortUrlPage({
  params,
}: {
  params: { shortId: string };
}) {
  // Este await aparece como que no es necesario, pero sí tiene efecto.
  const { shortId } = params;
  await getOriginalUrl(shortId);
}
