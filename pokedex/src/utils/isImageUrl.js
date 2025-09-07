export const isImageUrl = (value) => {
    return typeof value === "string" && /\.(png|jpg|jpeg|gif)$/i.test(value);
}