export const addZero = (number) => {
  if (number.toString().length === 1) return `#00${number}`;
  if (number.toString().length === 2) return `#0${number}`;
  return "#" + number.toString();
};
