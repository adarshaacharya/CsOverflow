export const convertToArray = (str: string) => {
  const re = /:\s|,\s|\s*\s/; // split on colon space or comma space or just space
  const arr = str.split(re);
  return arr;
};
