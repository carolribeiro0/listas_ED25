import Pilha from "../../src/pilha.js";
import trocaTopoBase from "../../src/lista1/Q3.js";

let pilha;

beforeEach(() => {
    pilha = new Pilha();
});

test("Deve trocar o topo com a base de uma pilha com vários elementos", () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    pilha.push(4);

    trocaTopoBase(pilha);

    expect(pilha.pop()).toBe(1);
    expect(pilha.pop()).toBe(3);
    expect(pilha.pop()).toBe(2);
    expect(pilha.pop()).toBe(4);
});

test("Deve trocar o topo com a base de uma pilha com dois elementos", () => {
    pilha.push(1);
    pilha.push(2);

    trocaTopoBase(pilha);

    expect(pilha.pop()).toBe(1);
    expect(pilha.pop()).toBe(2);
});

test("Deve lançar erro ao tentar trocar o topo com a base de uma pilha vazia", () => {
    expect(() => trocaTopoBase(pilha)).toThrow("A pilha está vazia!");
});

test("Deve manter a pilha inalterada se houver apenas um elemento", () => {
    pilha.push(1);

    trocaTopoBase(pilha);

    expect(pilha.pop()).toBe(1);
    expect(pilha.isEmpty()).toBe(true);
});