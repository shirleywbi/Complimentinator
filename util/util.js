export function formatCompliment(string) {
    // Capitalize first letter
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string + ".";
}