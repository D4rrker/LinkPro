export const validateResponse = async (response: Response) => {
  if (!response) throw new Error("No se recibió respuesta del servidor.");

  if (response.status === 429) return "rate_limit";

  if (!response.ok) {
    throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
  }

  return response.json();
};