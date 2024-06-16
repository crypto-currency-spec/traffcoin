export const generateRowElements = (start: number, end: number) => {
  let result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  result.push(...result);

  return result;
};