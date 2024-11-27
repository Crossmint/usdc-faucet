export async function fetchPostJson<T>(url: string, body: any, headers: Record<string, string> = {}): Promise<T> {
    let res;
    try {
        res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key":
                    "ck_staging_666s34kJSUV71hV78mG9XcC4eVhMntGSNfvftj4EXgKPAqvnCDtJrJdUiygBMP1tgHNg3mWZmVuz5YQsXMorwiCYAAa84RSsa9kK4M9Wx1rVZMM4rciXC4R6vf5JP8dJRabCP2kU7NF3orYu8LsWvJYrTjMNAUTc6WrX1KA26W8DP73ivP2iZHyLFt33HwVF4oBJFrdPfSkVax7ErSknZyvQ",
                ...headers,
            },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error(errorData);
            throw new Error(errorData.message || "Failed to fetch");
        }

        return processJsonResponse(res);
    } catch (e) {
        console.error(e);
        throw e; // Re-throw the error to be handled by the caller
    }
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
