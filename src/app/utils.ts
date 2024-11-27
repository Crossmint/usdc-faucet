export async function fetchPostJson<T>(
  url: string,
  body: any,
  headers: Record<string, string> = {}
): Promise<T> {
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "", // TODO add
        ...headers,
      },
      body: JSON.stringify(body),
    });
  } catch (e) {
    console.error(e);
    throw new Error("Failed to fetch");
  }

  return processJsonResponse(res);
}

export function processJsonResponse(res: Response) {
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  try {
    return res.json();
  } catch (e) {
    console.error(e);
    throw new Error("Failed to parse response");
  }
}
