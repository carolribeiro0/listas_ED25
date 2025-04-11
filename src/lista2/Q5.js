export function criarDeque() {
    return [];
}

export function inserirInicio(deque, valor) {
    for (let i = deque.length; i > 0; i--) {
        deque[i] = deque[i - 1];
    }
    deque[0] = valor;
}

export function removerInicio(deque) {
    if (deque.length === 0) throw new Error("Underflow");

    const primeiro = deque[0];
    for (let i = 0; i < deque.length - 1; i++) {
        deque[i] = deque[i + 1];
    }
    deque.length--;
    return primeiro;
}

export function inserirFim(deque, valor) {
    deque[deque.length] = valor;
}

export function removerFim(deque) {
    if (deque.length === 0) throw new Error("Underflow");

    const ultimo = deque[deque.length - 1];
    deque.length--;
    return ultimo;
}
