import Lista from "../ListaSimples";

class FilaLista {
    constructor() {
        this.lista = new Lista();
    }

    enqueue(elemento) {
        this.lista.append(elemento);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const frente = this.lista.head.prox.elemento;
        this.lista.removeFirst();
        return frente;
    }

    frente() {
        if (this.isEmpty()) return null;
        return this.lista.head.prox.elemento;
    }

    isEmpty() {
        return this.lista.isEmpty();
    }

    size() {
        return this.lista.length();
    }

    toString() {
        return this.lista.toString();
    }
}

export default FilaLista;
