import Features from "@/components/Features/Features";
import SavedUrls from "@/components/SavedUrls/SavedUrls";
import UrlShortenerForm from "@/components/Form/UrlShortenerForm";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-100">
          Acorta tus enlaces de forma rápida y segura
        </h1>
        <UrlShortenerForm />
        <div className="my-20"></div>
        <Features />
        <SavedUrls />
      </main>
    </div>
  );
}
