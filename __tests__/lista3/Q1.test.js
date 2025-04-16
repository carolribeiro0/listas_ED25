import PilhaFila from "../../src/lista3/Q1";

let p;

beforeEach(() => {
    p = new PilhaFila();
});

test("Pilha deve iniciar vazia", () => {
    expect(p.isEmpty()).toBe(true);
    expect(p.size()).toBe(0);
});

test("Operação push deve adicionar elementos no topo", () => {
    p.push('A');
    p.push('B');
    p.push('C');
    expect(p.toString()).toBe('CBA');
    expect(p.size()).toBe(3);
});

test("Operação topo deve retornar o topo sem remover", () => {
    p.push('X');
    p.push('Y');
    expect(p.topo()).toBe('Y');
    expect(p.size()).toBe(2);
});

test("Operação pop deve remover e retornar o topo", () => {
    p.push('1');
    p.push('2');
    expect(p.pop()).toBe('2');
    expect(p.pop()).toBe('1');
    expect(p.pop()).toBe(null);
    expect(p.isEmpty()).toBe(true);
});

test("Múltiplas operações em sequência", () => {
    p.push('A');
    p.push('B');
    expect(p.pop()).toBe('B');
    p.push('C');
    expect(p.topo()).toBe('C');
    expect(p.toString()).toBe('CA');
});
