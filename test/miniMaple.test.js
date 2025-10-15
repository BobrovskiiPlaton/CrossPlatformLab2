import {MiniMaple} from "../src/miniMaple";

test('differentiate constant', () => {
    expect(MiniMaple.differentiate('5', 'x')).toBe('0');
});

test('differentiate simple variable', () => {
    expect(MiniMaple.differentiate('x', 'x')).toBe('1');
});

test('differentiate variable with coefficient', () => {
    expect(MiniMaple.differentiate('3*x', 'x')).toBe('3');
});

test('differentiate power function', () => {
    expect(MiniMaple.differentiate('x^3', 'x')).toBe('3*x^2');
});

test('differentiate with coefficient and power', () => {
    expect(MiniMaple.differentiate('4*x^2', 'x')).toBe('8*x');
});

test('differentiate polynomial', () => {
    expect(MiniMaple.differentiate('3*x^2 + 2*x - 5', 'x')).toBe('6*x+2');
});

test('differentiate with wrong variable', () => {
    expect(MiniMaple.differentiate('3*x^2', 'y')).toBe('0');
});

test('differentiate mixed variables', () => {
    expect(MiniMaple.differentiate('3*x^2 + 2*y', 'x')).toBe('6*x');
});

test('differentiate empty input', () => {
    expect(MiniMaple.differentiate('', 'x')).toBe('0');
});

test('differentiate complex expression', () => {
    expect(MiniMaple.differentiate('x^4 - 3*x^3 + 2*x^2 - x + 7', 'x'))
        .toBe('4*x^3-9*x^2+4*x-1');
});