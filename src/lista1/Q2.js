// QUESTÃO 2. Uma Pilha pode ser definida como um conjunto ordenado de dados, no qual os
// dados podem ser inseridos ou removidos a partir de uma extremidade chamada topo da pilha.
// Duas pilhas A e B podem ser implementas a partir do compartilhamento do mesmo vetor de
// tamanho determinado, como apresentado na figura a seguir. Escreva as seguintes funções em
// Javascript.
// i. Declarações de constantes e procedimento de inicializar as pilhas (os valores de
//     topoA e topoB).
//     ii. As funções ÉVaziaA e ÉVaziaB.
//     iii. As funções empilhaA, empilhaB, desempilhaA e desempilhaB. Só deve ser
//     emitida uma mensagem de pilha cheia se todas as posições do vetor estiverem ocupadas.

import PilhaDupla from "../PilhaDupla.js";

export function inicializarPilha(tamanho) {
    return new PilhaDupla(tamanho);
}

export function ehVaziaA(pilha) {
    return pilha.topoA === -1;
}

export function ehVaziaB(pilha) {
    return pilha.topoB === pilha.vetor.length;
}

export function empilhaA(pilha, valor) {
    if (pilha.topoA + 1 === pilha.topoB) {
        throw new Error("Pilha cheia!");
    }
    pilha.vetor[++pilha.topoA] = valor;
}

export function empilhaB(pilha, valor) {
    if (pilha.topoB - 1 === pilha.topoA) {
        throw new Error("Pilha cheia!");
    }
    pilha.vetor[--pilha.topoB] = valor;
}

export function desempilhaB(pilha) {
    if (ehVaziaB(pilha)) {
        throw new Error("Pilha B está vazia!");
    }
    return pilha.vetor[pilha.topoB++];
}

export function desempilhaA(pilha) {
    if (ehVaziaA(pilha)) {
        throw new Error("Pilha A está vazia!");
    }
    return pilha.vetor[pilha.topoA--];
}
