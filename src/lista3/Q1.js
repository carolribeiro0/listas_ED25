import Lista from "../ListaSimples";

class PilhaFila {
    constructor() {
        this.lista = new Lista();
    }

    push(elemento) {
        this.lista.add(elemento);
    }

    pop() {
        if (this.isEmpty()) return null;
        const topo = this.lista.head.prox.elemento;
        this.lista.removeFirst();
        return topo;
    }

    topo() {
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

export default PilhaFila;
