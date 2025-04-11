class FilaComPilhas {
    constructor() {
        this.pilhaEntrada = [];
        this.pilhaSaida = [];
    }

    enqueue(elemento) {
        this.pilhaEntrada.push(elemento);
    }

    dequeue() {
        if (this.isEmpty()) throw new Error("Underflow");

        if (this.pilhaSaida.length === 0) {
            while (this.pilhaEntrada.length > 0) {
                const item = this.pilhaEntrada.pop();
                this.pilhaSaida.push(item);
            }
        }

        return this.pilhaSaida.pop();
    }

    front() {
        if (this.isEmpty()) return null;

        if (this.pilhaSaida.length === 0) {
            while (this.pilhaEntrada.length > 0) {
                const item = this.pilhaEntrada.pop();
                this.pilhaSaida.push(item);
            }
        }

        return this.pilhaSaida[this.pilhaSaida.length - 1];
    }

    isEmpty() {
        return this.pilhaEntrada.length === 0 && this.pilhaSaida.length === 0;
    }

    length() {
        return this.pilhaEntrada.length + this.pilhaSaida.length;
    }

    toString() {
        const resultado = [];

        for (let i = this.pilhaSaida.length - 1; i >= 0; i--) {
            resultado.push(this.pilhaSaida[i]);
        }

        for (let i = 0; i < this.pilhaEntrada.length; i++) {
            resultado.push(this.pilhaEntrada[i]);
        }

        return resultado.join(", ");
    }

    clear() {
        this.pilhaEntrada = [];
        this.pilhaSaida = [];
    }
}

export default FilaComPilhas;
