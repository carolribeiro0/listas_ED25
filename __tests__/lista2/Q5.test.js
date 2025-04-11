import { criarDeque, inserirInicio, removerInicio, inserirFim, removerFim } from "../../src/lista2/Q5";

test("Inserção no início funciona corretamente", () => {
    const f = criarDeque();
    inserirInicio(f, 'A');
    inserirInicio(f, 'B');
    inserirInicio(f, 'C');

    expect(removerInicio(f)).toBe('C');
    expect(removerInicio(f)).toBe('B');
    expect(removerInicio(f)).toBe('A');
});

test("Inserção no fim funciona corretamente", () => {
    const f = criarDeque();
    inserirFim(f, 'A');
    inserirFim(f, 'B');
    inserirFim(f, 'C');

    expect(removerFim(f)).toBe('C');
    expect(removerFim(f)).toBe('B');
    expect(removerFim(f)).toBe('A');
});

test("Inserir em ambos os lados e remover corretamente", () => {
    const f = criarDeque();
    inserirInicio(f, 'A');
    inserirFim(f, 'B');
    inserirInicio(f, 'C');
    inserirFim(f, 'D');

    expect(removerInicio(f)).toBe('C');
    expect(removerFim(f)).toBe('D');
    expect(removerInicio(f)).toBe('A');
    expect(removerFim(f)).toBe('B');
});

test("Remover de deque vazio lança erro", () => {
    const f = criarDeque();
    expect(() => removerInicio(f)).toThrow("Underflow");
    expect(() => removerFim(f)).toThrow("Underflow");
});
