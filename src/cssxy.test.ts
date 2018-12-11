import {cssxy} from './cssxy';

describe('cssxy', () => {
  test('basis', () => {
    const icssxy = cssxy({fontSize: '15px'});
    icssxy.padding = '5px';
    
    expect(icssxy.fontSize()).toBe('15px');
    expect(icssxy.padding()).toBe('5px');
    expect(() => icssxy.margin()).toThrow();
  });
});
