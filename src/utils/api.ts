export async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch from ${endpoint}: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<T>;
}
