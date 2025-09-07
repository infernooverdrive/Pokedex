export function formatHeightImperial(heightInDecimeters) {
    const totalInches = heightInDecimeters * 3.937;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}'${inches}"`;
}