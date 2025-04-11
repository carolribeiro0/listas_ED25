import PilhaComFilas from "../../src/lista2/Q1";

let pilha;

beforeEach(() => {
    pilha = new PilhaComFilas();
});

test("Pilha deve estar vazia ao ser criada", () => {
    expect(pilha.isEmpty()).toBe(true);
    expect(pilha.length()).toBe(0);
});

test("Push deve adicionar elementos e top deve retornar o último", () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    expect(pilha.top()).toBe(3);
    expect(pilha.length()).toBe(3);
});

test("Pop deve remover o último elemento inserido", () => {
    pilha.push("a");
    pilha.push("b");
    pilha.push("c");

    pilha.pop();
    expect(pilha.top()).toBe("b");
    pilha.pop();
    expect(pilha.top()).toBe("a");
});

test("toString deve mostrar os elementos na ordem correta", () => {
    pilha.push("X");
    pilha.push("Y");
    pilha.push("Z");
    expect(pilha.toString()).toBe("Z, Y, X");
});
