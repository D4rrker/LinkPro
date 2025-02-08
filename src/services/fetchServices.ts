import { notFound, redirect } from "next/navigation";
import { generateFakeShortId } from "@/lib/formHandlers";

export const shortenUrl = async (url: string) => {
  const body = {
    original_url: url,
  };

  try {
    const response = await fetch("http://localhost:1234/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return response;
  } catch {
    throw new Error("Hubo un error con el servidor.");
  }
};

export const getOriginalUrl = async (urlParam: string) => {
  if (urlParam.length < 8) {
    console.error("❌ Parámetro no válido.");
    notFound();
  }

  const URL = `http://localhost:1234/${urlParam}`;

  const res = await fetch(URL);

  if (!res.ok) notFound();

  const data = await res.json();

  redirect(data.original_url);
};

export const fakeFetch = async (eve: React.FormEvent) => {
  eve.preventDefault();
  const shortId = generateFakeShortId();

  const fakefetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Respuesta simulada", shortId, status: 200 });
    }, 1000);
  });

  return fakefetch;
};
