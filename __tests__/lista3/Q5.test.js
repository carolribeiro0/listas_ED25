import Lista from "../../src/ListaSimples.js";
import embaralharLista from "../../src/lista3/Q5.js";

let l;

beforeEach(() => {
    l = new Lista();
});

test("Embaralhar lista vazia", () => {
    embaralharLista(l);
    expect(l.toString()).toBe("");
});

test("Embaralhar lista com um elemento", () => {
    l.add("A");
    embaralharLista(l);
    expect(l.toString()).toBe("A");
});

test("Embaralhar mantém os mesmos elementos", () => {
    l.add("A");
    l.add("B");
    l.add("C");

    const antes = [];
    let node = l.head.prox;
    while (node !== null) {
        antes.push(node.elemento);
        node = node.prox;
    }

    embaralharLista(l);

    const depois = [];
    node = l.head.prox;
    while (node !== null) {
        depois.push(node.elemento);
        node = node.prox;
    }

    expect(depois.sort()).toEqual(antes.sort());
});

test("Embaralhar pode alterar a ordem", () => {
    l.add("1");
    l.add("2");
    l.add("3");

    const original = l.toString();
    embaralharLista(l);
    const novo = l.toString();

    expect(novo === original).toBe(false);
});
