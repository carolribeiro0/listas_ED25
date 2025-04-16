import ListaSubstring from "../../src/lista3/Q6";

test("Substring de índices válidos", () => {
    const l = new ListaSubstring();
    l.add('a');
    l.add('b');
    l.add('c');
    l.add('d');
    l.add('e');

    const sub = l.substring(1, 3);
    expect(sub.toString()).toBe("bcd");
});

test("Substring com início igual ao fim", () => {
    const l = new ListaSubstring();
    l.add('a');
    l.add('b');
    l.add('c');
    l.add('d');

    const sub = l.substring(2, 2);
    expect(sub.toString()).toBe("c");
});

test("Substring do início até o meio", () => {
    const l = new ListaSubstring();
    l.add('x');
    l.add('y');
    l.add('z');

    const sub = l.substring(0, 1);
    expect(sub.toString()).toBe("xy");
});

test("Substring do meio até o final", () => {
    const l = new ListaSubstring();
    l.add('m');
    l.add('n');
    l.add('o');
    l.add('p');

    const sub = l.substring(2, 3);
    expect(sub.toString()).toBe("op");
});

test("Substring com índice fora do intervalo", () => {
    const l = new ListaSubstring();
    l.add('a');
    l.add('b');

    expect(() => l.substring(-1, 1)).toThrow("Índices inválidos.");
    expect(() => l.substring(1, 5)).toThrow("Índice fora do tamanho da lista.");
    expect(() => l.substring(2, 1)).toThrow("Índices inválidos.");
});
