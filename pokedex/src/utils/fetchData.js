import { apiGet } from "./apiRequest"
export async function fetchData(url) {
    try {
        const data = await apiGet(url);
        return data;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}