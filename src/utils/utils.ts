export const formatPrice = (price: number): string => {
  return (price).toLocaleString('da-DA', {
    style: 'currency',
    currency: 'dkk',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

export const sortBy = <T>(items: T[], key: keyof T) => {
  return items.sort((a: T, b: T) => {
    return Number(a[key]) - Number(b[key]);
  });
}

export default {
  sortBy,
  formatPrice,
}