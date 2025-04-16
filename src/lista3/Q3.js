import No from "../No";

class ListaArray {
    constructor() {
        this.nos = [];
        this.head = -1;
        this.tamanho = 0;
    }

    isEmpty() {
        return this.tamanho === 0;
    }

    length() {
        return this.tamanho;
    }

    add(elemento) {
        const novo = new No(elemento);
        novo.proximo = this.head;
        this.nos.push(novo);
        this.head = this.nos.length - 1;
        this.tamanho++;
    }

    append(elemento) {
        const novo = new No(elemento);
        novo.proximo = -1;
        this.nos.push(novo);
        const novoIndice = this.nos.length - 1;

        if (this.head === -1) {
            this.head = novoIndice;
        } else {
            let atual = this.head;
            while (this.nos[atual].proximo !== -1) {
                atual = this.nos[atual].proximo;
            }
            this.nos[atual].proximo = novoIndice;
        }

        this.tamanho++;
    }

    toString() {
        let resultado = "";
        let atual = this.head;
        while (atual !== -1) {
            resultado += this.nos[atual].elemento;
            atual = this.nos[atual].proximo;
        }
        return resultado.trim();
    }

    removeFirst() {
        if (this.head !== -1) {
            this.head = this.nos[this.head].proximo;
            this.tamanho--;
        }
    }

    removeLast() {
        if (this.head === -1) return;

        if (this.nos[this.head].proximo === -1) {
            this.head = -1;
        } else {
            let atual = this.head;
            let anterior = -1;
            while (this.nos[atual].proximo !== -1) {
                anterior = atual;
                atual = this.nos[atual].proximo;
            }
            this.nos[anterior].proximo = -1;
        }
        this.tamanho--;
    }
}

export default ListaArray;
