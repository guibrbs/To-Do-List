export const colorsSelector = (index) => {
    const colors = ['#FC76A0', '#70C4BF', '#AC6DDE', '#CFB452'];
    const colorPosition = index%colors.length;
    return colors[colorPosition];
}