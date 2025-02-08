import { getOriginalUrl } from "@/services/fetchServices";

type tParams = Promise<{ shortId: string }>;

export default async function ShortUrlPage({ params }: { params: tParams }) {
  const { shortId }: { shortId: string } = await params;
  await getOriginalUrl(shortId);

  return null;
}
