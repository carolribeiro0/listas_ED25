import Fila from "../Fila";

class GerenciadorCaminhoes {
    constructor() {
        this.fila = new Fila(10);
    }

    chegada(nomeCaminhoneiro) {
        if (this.fila.isFull()) {
            throw new Error("Limite de caminhoneiros atingido");
        }
        this.fila.enqueue(nomeCaminhoneiro);
    }

    saida() {
        if (this.fila.isEmpty()) {
            throw new Error("Nenhum caminhoneiro aguardando");
        }
        const proximo = this.fila.front();
        this.fila.dequeue();
        return proximo;
    }

    estaVazio() {
        return this.fila.isEmpty();
    }

    estaCheio() {
        return this.fila.isFull();
    }

    listar() {
        return this.fila.toString().split(", ").filter(c => c !== "");
    }

    quantidade() {
        return this.fila.length();
    }

    limpar() {
        this.fila.clear();
    }
}

export default GerenciadorCaminhoes;
