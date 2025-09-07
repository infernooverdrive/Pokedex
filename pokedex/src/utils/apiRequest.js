export async function apiRequest(url, method = "GET", data = null) {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: data ? JSON.stringify(data) : null
        });
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw {
                status: response.status,
                message: errorData.message || "Unknown error",
                raw: errorData
            }
        }
        return await response.json();
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export const apiGet = async (url) => await apiRequest(url);
export const apiDelete = async (url) => await apiRequest(url, "DELETE");
export const apiPost = async (url, data) => await apiRequest(url, "POST", data);
export const apiPut = async (url, data) => await apiRequest(url, "PUT", data);