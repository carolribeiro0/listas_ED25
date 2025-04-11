class Fila {
    constructor(size=5) {
        this.dados = [];
        this.size = size;
        this.inicio = 0;
        this.final = 0;
    }

    enqueue(elemento) {
        if (this.isFull()) throw new Error("Overflow");
        this.dados[this.final] = elemento;
        if (this.final === this.size) {
            this.final = 0;
        } else {
            this.final++;
        }
    }

    dequeue() {
        if (this.isEmpty()) throw new Error("Underflow");
        const elemento = this.dados[this.inicio];
    
        if (this.inicio === this.size) {
            this.inicio = 0;
        } else {
            this.inicio++;
        }
    
        return elemento;
    }

    front() {
        if (!this.isEmpty()) return this.dados[this.inicio];
    }

    length() {
        if (this.isEmpty()) return 0;
        if (this.inicio < this.final) return this.final - this.inicio;
        return ((this.size + 1 - this.inicio) + (this.final - 0));
    }

    isEmpty() {
        return this.inicio === this.final;
    }

    isFull() {
        return this.length() === this.size;
    }

    toString() {
        if (this.isEmpty()) {
            return "Fila vazia";
        }
    
        let resultado = [];
        let i = this.inicio;
    
        while (i !== this.final) {
            resultado.push(this.dados[i]);
            i = (i + 1) % this.size;
        }
    
        return resultado.join(", ");
    }

    clear() {
        this.inicio = 0;
        this.final = 0;
    }
}

export default Fila;