import Pilha from "../pilha";

export default function decimalParaBinario(numero) {
    if (numero < 0) {
        throw new Error("O número deve ser maior ou igual a zero!");
    }

    if (numero === 0) {
        return "0";
    }

    const pilha = new Pilha();

    while (numero > 0) {
        const resto = numero % 2;
        pilha.push(resto);
        numero = (numero - resto) / 2;
    }

    let binario = "";
    while (!pilha.isEmpty()) {
        binario += pilha.pop();
    }

    return binario;
}