export const formatPrice = (x: number, currency: string) => {
  switch (currency) {
    case "BRL":
      return x.toFixed(2).replace(".", ",");
    default:
      return x.toFixed(2);
  }
};

export function generateRandomInteger(min: number, max: number) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export const createRangeArray = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
