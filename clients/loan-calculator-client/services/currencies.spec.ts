import { formatCurrency } from './currencies';

describe('formatCurrency', () => {
  it('should format currency values', () => {
    expect(formatCurrency(12345)).toBe('123,45 €');
  });
});
