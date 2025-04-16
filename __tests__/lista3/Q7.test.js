import resolverJosephus from "../../src/lista3/Q7.js";

test("Elimina corretamente e retorna o sobrevivente (7 soldados, passo 3)", () => {
    const { eliminados, sobrevivente } = resolverJosephus(7, 3);
    expect(eliminados).toEqual([3, 6, 2, 7, 5, 1]);
    expect(sobrevivente).toBe(4);
});

test("Elimina corretamente com 5 soldados e passo 2", () => {
    const { eliminados, sobrevivente } = resolverJosephus(5, 2);
    expect(eliminados).toEqual([2, 4, 1, 5]);
    expect(sobrevivente).toBe(3);
});

test("Elimina corretamente com 10 soldados e passo 4", () => {
    const { eliminados, sobrevivente } = resolverJosephus(10, 4);
    expect(sobrevivente).toBeGreaterThan(0);
    expect(eliminados.length).toBe(9);
});
