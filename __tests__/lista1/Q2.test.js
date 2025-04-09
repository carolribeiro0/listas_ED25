import {
    inicializarPilha,
    ehVaziaA,
    ehVaziaB,
    empilhaA,
    empilhaB,
    desempilhaA,
    desempilhaB
} from "../../src/lista1/Q2.js";

let pilha;

beforeEach(() => {
    pilha = inicializarPilha(10);
});

test("Deve verificar se as pilhas estão vazias", () => {
    expect(ehVaziaA(pilha)).toBe(true);
    expect(ehVaziaB(pilha)).toBe(true);
});

test("Deve empilhar e desempilhar elementos na pilha A", () => {
    empilhaA(pilha, 1);
    empilhaA(pilha, 2);
    expect(ehVaziaA(pilha)).toBe(false);
    expect(desempilhaA(pilha)).toBe(2);
    expect(desempilhaA(pilha)).toBe(1);
    expect(ehVaziaA(pilha)).toBe(true);
});

test("Deve empilhar e desempilhar elementos na pilha B", () => {
    empilhaB(pilha, 9);
    empilhaB(pilha, 8);
    expect(ehVaziaB(pilha)).toBe(false);
    expect(desempilhaB(pilha)).toBe(8);
    expect(desempilhaB(pilha)).toBe(9);
    expect(ehVaziaB(pilha)).toBe(true);
});

test("Deve lançar erro ao empilhar em pilha cheia", () => {
    for (let i = 0; i < 5; i++) empilhaA(pilha, i);
    for (let i = 0; i < 5; i++) empilhaB(pilha, i);
    expect(() => empilhaA(pilha, 10)).toThrow("Pilha cheia!");
});

test("Deve lançar erro ao desempilhar pilha vazia", () => {
    expect(() => desempilhaA(pilha)).toThrow("Pilha A está vazia!");
    expect(() => desempilhaB(pilha)).toThrow("Pilha B está vazia!");
});