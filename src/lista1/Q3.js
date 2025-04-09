import Pilha from "../pilha";

export default function trocaTopoBase(pilha) {
    if (pilha.isEmpty()) {
        throw new Error("A pilha está vazia!");
    }

    if (pilha.length() === 1) {
        return;
    }

    const aux = new Pilha();
    const base = pilha.pop();

    while (pilha.length() > 1) {
        aux.push(pilha.pop());
    }

    const topo = pilha.pop();

    pilha.push(base);

    while (!aux.isEmpty()) {
        pilha.push(aux.pop());
    }

    pilha.push(topo);
}