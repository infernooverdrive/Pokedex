export function getFlattenedData(data, condition, parentPath = "") {
    const results = [];

    if (Array.isArray(data)) {
        data.forEach((item, index) => {
            const path = `${parentPath}[${index}]`;
            if (item && typeof item === "object") {
                results.push(...getFlattenedData(item, condition, path));
            } else if (condition(item)) {
                results.push({ path, value: item });
            }
        });
    } else if (data && typeof data === "object") {
        for (const key in data) {
            const value = data[key];
            const path = parentPath ? `${parentPath}.${key}` : key;

            if (value && typeof value === "object") {
                results.push(...getFlattenedData(value, condition, path));
            } else if (condition(value)) {
                results.push({ path, value });
            }
        }
    }

    return results;
}
