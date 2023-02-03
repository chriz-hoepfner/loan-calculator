import { padNumber } from './numbers';

describe('padNumber', () => {
  it('should pad numbers with zeros', () => {
    expect(padNumber(1)).toBe('01');
    expect(padNumber(10)).toBe('10');
  });
});
