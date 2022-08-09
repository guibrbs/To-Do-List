export const colorsSelector = (index) => {
    const colors = ['#FC76A0', "#000"];
    const colorPosition = index%colors.length;
    return colors[colorPosition];
}