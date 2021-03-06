const i = require('../../lib/interpreter.js');

describe('calculations', () => {
  it('should sum numbers', () => {
    const result = i.exec('(+ 10 20 30)');
    expect(result).toBe(60);
  });

  it('should sum positive and negative numbers', () => {
    const result = i.exec('(+ 10 20 -30)');
    expect(result).toBe(0);
  });

  it('should substract numbers', () => {
    const result = i.exec('(- 10 20 30)');
    expect(result).toBe(-40);
  });

  it('should substract positive and negative numbers', () => {
    const result = i.exec('(- 10 -20 30)');
    expect(result).toBe(0);
  });

  it('should substract negative numbers', () => {
    const result = i.exec('(- -10 -20 -30)');
    expect(result).toBe(40);
  });

  it('should multiply numbers', () => {
    const result = i.exec('(* 10 20 30)');
    expect(result).toBe(6000);
  });

  it('should devide numbers', () => {
    const result = i.exec('(/ 100 4 5)');
    expect(result).toBe(5);
  });

  describe('calculate inserted expressions', () => {
    it('should sum numbers and then sustract', () => {
      const result = i.exec('(- 100 0 (+ 90 9))');
      expect(result).toBe(1);
    });

    it('should product of results of expressions', () => {
      const result = i.exec('(* (* 5 5) (/ 20 5))');
      expect(result).toBe(100);
    });

    it('should sum results of expressions', () => {
      const result = i.exec('(+ (* 5 5)\n (/ 20 5)\n 1\t\n (+ 40 30))');
      expect(result).toBe(100);
    });

    it('should call several expressions in sequence', () => {
      const result1 = i.exec('(do (+ 10 20)\n(+ 50 50))');
      const result2 = i.exec('(do (+ 10 20)\n(+ 20 20)\n(+ 30 30)\n(+ 40 40)\n(+ 10 20))');

      expect(result1).toBe(100);
      expect(result2).toBe(30);
    });
  });
});

