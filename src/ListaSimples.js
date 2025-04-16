import No from "./No";

class Lista {
    constructor() {
        this.head = new No();
    }

    add(elemento) {
        let novoNo = new No(elemento);
        novoNo.prox = this.head.prox;
        this.head.prox = novoNo;
    }

    append(elemento) {
        let novoNo = new No(elemento);
        let atual = this.head;
        while (atual.prox !== null) {
            atual = atual.prox;
        }
        atual.prox = novoNo;
    }

    removeLast() {
        if (!this.isEmpty()) {
            let node_a = this.head;
            let node_b = this.head.prox;
            while (node_b.prox !== null) {
                node_a = node_b;
                node_b = node_b.prox;
            }
            node_a.prox = null;
        }
    }

    removeFirst() {
        if (!this.isEmpty()) {
            let aux = this.head.prox;
            this.head.prox = aux.prox;
        }
    }

    isEmpty() {
        return this.head.prox === null;
    }

    length() {
        let result = 0;
        let node_b = this.head.prox;
        while (node_b !== null) {
            result++;
            node_b = node_b.prox;
        }
        return result;
    }

    addAt(elemento, pos) {
        if (pos < 0 || pos > this.length()) {
            throw new Error("Posição inválida.");
        }

        let novoNo = new No(elemento);
        let atual = this.head;
        let index = 0;

        while (index < pos) {
            atual = atual.prox;
            index++;
        }

        novoNo.prox = atual.prox;
        atual.prox = novoNo;
    }

    removeAt(pos) {
        if (pos < 0 || pos >= this.length()) {
            throw new Error("Posição inválida.");
        }

        let atual = this.head;
        let index = 0;

        while (index < pos) {
            atual = atual.prox;
            index++;
        }

        atual.prox = atual.prox.prox;
    }

    search(key) {
        let atual = this.head.prox;
        while (atual !== null) {
            if (atual.elemento === key) {
                return true;
            }
            atual = atual.prox;
        }
        return false;
    }

    toString() {
        let result = '';
        let node_b = this.head.prox;
        while (node_b !== null) {
            result += node_b.elemento;
            node_b = node_b.prox;
        }
        return result.trim();
    }
}

export default Lista;
