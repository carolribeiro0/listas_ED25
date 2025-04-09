import verificaBemFormado from "../../src/lista1/Q5.js";

test("Deve retornar true para uma sequência bem-formada", () => {
    expect(verificaBemFormado("[()]")).toBe(true);
    expect(verificaBemFormado("[()[]()]")).toBe(true);
    expect(verificaBemFormado("")).toBe(true);
});

test("Deve retornar false para uma sequência malformada", () => {
    expect(verificaBemFormado("[(])")).toBe(false);
    expect(verificaBemFormado("(()]")).toBe(false);
    expect(verificaBemFormado("((())")).toBe(false);
    expect(verificaBemFormado("())")).toBe(false);
});

test("Deve retornar true para uma sequência com apenas parênteses bem-formados", () => {
    expect(verificaBemFormado("()")).toBe(true);
    expect(verificaBemFormado("(())")).toBe(true);
    expect(verificaBemFormado("((()))")).toBe(true);
});

test("Deve retornar true para uma sequência com apenas colchetes bem-formados", () => {
    expect(verificaBemFormado("[]")).toBe(true);
    expect(verificaBemFormado("[[]]")).toBe(true);
    expect(verificaBemFormado("[[[]]]")).toBe(true);
});