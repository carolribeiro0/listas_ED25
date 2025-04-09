import decimalParaBinario from "../../src/lista1/Q4.js";

test("Deve converter 0 para binário", () => {
    expect(decimalParaBinario(0)).toBe("0");
});

test("Deve converter 1 para binário", () => {
    expect(decimalParaBinario(1)).toBe("1");
});

test("Deve converter 2 para binário", () => {
    expect(decimalParaBinario(2)).toBe("10");
});

test("Deve converter 10 para binário", () => {
    expect(decimalParaBinario(10)).toBe("1010");
});

test("Deve converter 400 para binário", () => {
    expect(decimalParaBinario(400)).toBe("110010000");
});

test("Deve lançar erro para números negativos", () => {
    expect(() => decimalParaBinario(-1)).toThrow("O número deve ser maior ou igual a zero!");
});