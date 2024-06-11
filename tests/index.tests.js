const D = require('../src/index');

describe('D', () => {
  let d;

  beforeEach(() => {
    d = new D(2020, 1, 1, 0, 0, 0);
  });

  test('year should return 2020', () => {
    expect(d.year).toBe(2020);
  });

  test('yr should return 20', () => {
    expect(d.yr).toBe(20);
  });

  test('month should return January', () => {
    expect(d.month).toBe('January');
  });

  test('mon should return Jan', () => {
    expect(d.mon).toBe('Jan');
  });

  test('day should return Friday', () => {
    expect(d.day).toBe('Friday');
  });

  test('dy should return Fri', () => {
    expect(d.dy).toBe('Fri');
  });

  test('date should return 1', () => {
    expect(d.date).toBe(1);
  });

  test('hours should return 0', () => {
    expect(d.hours).toBe(0);
  });

  test('mins should return 0', () => {
    expect(d.mins).toBe(0);
  });
  
  test('secs should return 0', () => {
    expect(d.secs).toBe(0);
  });

  test('format should return 2020-January-01', () => {
    expect(d.format()).toBe('2020-January-01');
  });

  test('format should return 1st January 2020 00:00:00', () => {
    expect(d.format('# M Y H:I:S')).toBe('1st January 2020 00:00:00');
  });

  test('when should return 7 years ago', () => {
    const mockDate = new Date(2022, 6, 21, 23, 0, 31);
    const realDate = Date;
    global.Date = jest.fn((...args) => args.length ? new realDate(...args) : mockDate);

    const d = new D(2015, 6, 21, 23, 0, 31);

    expect(d.when()).toBe('7 years ago');

    global.Date = realDate;
  });
});