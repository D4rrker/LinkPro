import { getOriginalUrl } from "@/services/fetchServices";

type tParams = Promise<{ shortId: string }>;

export default async function ShortUrlPage({ params }: { params: tParams }) {
  // Este await aparece como que no es necesario, pero sí tiene efecto.
  const { shortId }: { shortId: string } = await params;
  await getOriginalUrl(shortId);

  return null;
}
