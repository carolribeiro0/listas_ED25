import ListaArray from "../../src/lista3/Q3";

let l;

beforeEach(() => {
    l = new ListaArray();
});

test("Lista inicia vazia", () => {
    expect(l.isEmpty()).toBe(true);
    expect(l.length()).toBe(0);
});

test("Adicionar no início", () => {
    l.add("A");
    l.add("B");
    l.add("C");
    expect(l.toString()).toBe("CBA");
    expect(l.length()).toBe(3);
});

test("Adicionar no final com append", () => {
    l.append("X");
    l.append("Y");
    l.append("Z");
    expect(l.toString()).toBe("XYZ");
    expect(l.length()).toBe(3);
});

test("Remover primeiro", () => {
    l.append("1");
    l.append("2");
    l.removeFirst();
    expect(l.toString()).toBe("2");
    expect(l.length()).toBe(1);
});

test("Remover último", () => {
    l.append("A");
    l.append("B");
    l.append("C");
    l.removeLast();
    expect(l.toString()).toBe("AB");
    expect(l.length()).toBe(2);
});

test("Encadeamento de operações", () => {
    l.add("M");
    l.append("N");
    l.add("O");
    expect(l.toString()).toBe("OMN");
    l.removeFirst();
    l.removeLast();
    expect(l.toString()).toBe("M");
});
