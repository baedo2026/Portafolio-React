export async function fetchApi<T>(
  url: string,
  signal: AbortSignal
): Promise<T> {
  const response = await fetch(url, {
    signal,
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error al consultar la API: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
