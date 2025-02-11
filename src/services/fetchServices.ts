import { notFound, redirect } from "next/navigation";

export const shortenUrl = async (url: string) => {
  const body = {
    original_url: url,
  };

  try {
    const response = await fetch("https://api.linkpro.li/shorten", {
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
  if (urlParam === "favicon.ico") return;

  if (urlParam === "robots.txt") return;

  if (urlParam.length < 8) {
    console.error("❌ Parámetro no válido.");
    notFound();
  }

  const URL = `https://api.linkpro.li/${urlParam}`;

  const res = await fetch(URL);

  console.log(res);

  if (!res.ok) notFound();

  const data = await res.json();

  redirect(data.original_url);
};
