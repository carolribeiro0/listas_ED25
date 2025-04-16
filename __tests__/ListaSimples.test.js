import Lista from "../src/ListaSimples";

let l;

beforeEach(() => {
    l = new Lista();
});

test("Inicializada deve ser vazia", () => {
    expect(l.isEmpty()).toBe(true);
});

test("Adicionar no início da lista", () => {
    l.add('A');
    l.add('B');
    l.add('C');
    expect(l.toString()).toBe('CBA');
    l.removeLast();
    expect(l.toString()).toBe('CB');
    l.removeFirst();
    expect(l.toString()).toBe('B');
    expect(l.length()).toBe(1);
    l.removeFirst();
    expect(l.isEmpty()).toBe(true);
    expect(l.length()).toBe(0);
});

test("Adicionar no final da lista com append", () => {
    l.append('X');
    l.append('Y');
    l.append('Z');
    expect(l.toString()).toBe('XYZ');
    expect(l.length()).toBe(3);
});

test("addAt deve inserir em posições específicas", () => {
    l.append('A');
    l.append('B');
    l.append('D');
    l.addAt('C', 2);
    expect(l.toString()).toBe('ABCD');
    l.addAt('X', 0);
    expect(l.toString()).toBe('XABCD');
    l.addAt('Y', 5);
    expect(l.toString()).toBe('XABCDY');
});

test("addAt deve lançar erro para posições inválidas", () => {
    expect(() => l.addAt('X', -1)).toThrow("Posição inválida.");
    expect(() => l.addAt('X', 1)).toThrow("Posição inválida.");
});

test("removeAt deve remover elementos corretamente", () => {
    l.append('A');
    l.append('B');
    l.append('C');
    l.append('D');
    l.removeAt(2);
    expect(l.toString()).toBe('ABD');
    l.removeAt(0);
    expect(l.toString()).toBe('BD');
    l.removeAt(1);
    expect(l.toString()).toBe('B');
});

test("removeAt deve lançar erro para posições inválidas", () => {
    l.append('A');
    expect(() => l.removeAt(-1)).toThrow("Posição inválida.");
    expect(() => l.removeAt(1)).toThrow("Posição inválida.");
});

test("search deve encontrar elementos", () => {
    l.append('A');
    l.append('B');
    l.append('C');
    expect(l.search('A')).toBe(true);
    expect(l.search('C')).toBe(true);
    expect(l.search('Z')).toBe(false);
});
