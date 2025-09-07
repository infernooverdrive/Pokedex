export function format(text) {
    return text.substring(0, 1).toUpperCase() + text.substring(1, text.length).replace(/[-_.]/g, " ");
}