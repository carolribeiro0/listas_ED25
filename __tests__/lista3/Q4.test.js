import Lista from "../../src/ListaSimples.js";
import inverterLista from "../../src/lista3/Q4.js";

let l;

beforeEach(() => {
    l = new Lista();
});

test("Inverter lista vazia", () => {
    inverterLista(l);
    expect(l.toString()).toBe("");
});

test("Inverter lista com um elemento", () => {
    l.add("A");
    inverterLista(l);
    expect(l.toString()).toBe("A");
});

test("Inverter lista com múltiplos elementos", () => {
    l.add("A");
    l.add("B");
    l.add("C");
    inverterLista(l);
    expect(l.toString()).toBe("ABC");
});
