export const convertToArray = (str: string) => {
  const re: string = str.replace(/\s\s+/g, ' ');
  const arr: string[] = re.trim().split(' ');
  return arr;
};
