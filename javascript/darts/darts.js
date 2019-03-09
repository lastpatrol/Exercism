export const solve = (x, y) => {
  const radius = Math.sqrt(x * x + y * y);
  if (radius > 10) return 0;
  if (radius > 5) return 1;
  if (radius > 1) return 5;
  if (radius >= 0) return 10;
  return null;
};