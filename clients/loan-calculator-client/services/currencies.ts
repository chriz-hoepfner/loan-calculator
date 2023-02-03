export const formatCurrency = (value: number) => {
  return Intl.NumberFormat('de', {
    style: 'currency',
    currency: 'EUR',
  }).format(value / 100);
};
