import Fila from "../Fila";

class PilhaComFilas {
    constructor() {
        this.f1 = new Fila(20);
        this.f2 = new Fila(20);
    }

    push(elemento) {
        this.f2.enqueue(elemento);

        while (!this.f1.isEmpty()) {
            this.f2.enqueue(this.f1.front());
            this.f1.dequeue();
        }

        [this.f1, this.f2] = [this.f2, this.f1];
    }

    pop() {
        if (this.isEmpty()) throw new Error("Underflow");
        return this.f1.dequeue();
    }

    top() {
        if (this.isEmpty()) return null;
        return this.f1.front();
    }

    isEmpty() {
        return this.f1.isEmpty();
    }

    length() {
        return this.f1.length();
    }

    toString() {
        return this.f1.toString();
    }

    clear() {
        this.f1.clear();
        this.f2.clear();
    }
}

export default PilhaComFilas;
