import No from "../No";

class ListaSubstring {
    constructor() {
        this.inicio = null;
    }

    add(elemento) {
        const novoNo = new No(elemento);
        if (!this.inicio) {
            this.inicio = novoNo;
        } else {
            let atual = this.inicio;
            while (atual.prox) {
                atual = atual.prox;
            }
            atual.prox = novoNo;
        }
    }

    substring(inicioIndice, fimIndice) {
        if (inicioIndice < 0 || fimIndice < inicioIndice) {
            throw new Error("Índices inválidos.");
        }

        let novaLista = new ListaSubstring();
        let atual = this.inicio;
        let pos = 0;

        while (atual) {
            if (pos >= inicioIndice && pos <= fimIndice) {
                novaLista.add(atual.elemento);
            }
            if (pos > fimIndice) break;
            atual = atual.prox;
            pos++;
        }

        if (pos <= fimIndice) {
            throw new Error("Índice fora do tamanho da lista.");
        }

        return novaLista;
    }

    toString() {
        let resultado = "";
        let atual = this.inicio;
        while (atual) {
            resultado += atual.elemento;
            atual = atual.prox;
        }
        return resultado;
    }
}

export default ListaSubstring;
