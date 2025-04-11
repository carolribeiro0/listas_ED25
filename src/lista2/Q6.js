import Fila from "../Fila";

export function inverterFila(fila) {
    if (fila.isEmpty()) {
        return new Fila(fila.size);
    }

    const frente = fila.front();
    fila.dequeue();

    const invertida = inverterFila(fila);
    invertida.enqueue(frente);
    return invertida;
}
