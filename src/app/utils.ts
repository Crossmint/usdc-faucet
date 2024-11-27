export async function fetchPostJson<T>(url: string, body: any, headers: Record<string, string> = {}): Promise<T> {
    let res;
    try {
        res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key":
                    "sk_staging_666s34kJSUV71hV78mG9XcC4eVhMntGSNfvftj4EXgKPAqvnCDtmmrWAcb26pj1PnTPi6MCFuEYSfmT6dwYbtjdbYw8p6uho6n9zT2poeRnXk6ZDpna5sTN5b6GTVn4uypihYawQgC2rW4UcMyLebS1CcrCkgveTKLjUzEZYML5KekyHApfUjSa5rncnbfGzu9kbrHrPGZfxppphcekwi7zp",
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
