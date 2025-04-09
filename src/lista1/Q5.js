import Pilha from "../pilha";

export default function verificaBemFormado(sequencia) {
    const pilha = new Pilha();

    for (let i = 0; i < sequencia.length; i++) {
        const char = sequencia[i];

        if (char === '(' || char === '[') {
            pilha.push(char);
        } 
        else if (char === ')' || char === ']') {
            if (pilha.isEmpty()) {
                return false;
            }

            const topo = pilha.pop();
            if (
                (char === ')' && topo !== '(') ||
                (char === ']' && topo !== '[')
            ) {
                return false;
            }
        }
    }

    return pilha.isEmpty();
}