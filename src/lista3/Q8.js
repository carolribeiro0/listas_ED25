class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.prox = null;
    }
}

class Lista {
    constructor() {
        this.head = null;
    }

    add(nome, idade) {
        const novaPessoa = new Pessoa(nome, idade);
        if (!this.head) {
            this.head = novaPessoa;
        } else {
            let atual = this.head;
            while (atual.prox !== null) {
                atual = atual.prox;
            }
            atual.prox = novaPessoa;
        }
    }

    ordenarPorNome() {
        if (!this.head || !this.head.prox) return this;

        let trocou;
        do {
            trocou = false;
            let atual = this.head;

            while (atual.prox !== null) {
                if (atual.nome > atual.prox.nome) {
                    const tempNome = atual.nome;
                    const tempIdade = atual.idade;
                    atual.nome = atual.prox.nome;
                    atual.idade = atual.prox.idade;
                    atual.prox.nome = tempNome;
                    atual.prox.idade = tempIdade;

                    trocou = true;
                }
                atual = atual.prox;
            }
        } while (trocou);

        return this;
    }

    ordenarPorIdade() {
        if (!this.head || !this.head.prox) return this;

        let trocou;
        do {
            trocou = false;
            let atual = this.head;

            while (atual.prox !== null) {
                if (atual.idade > atual.prox.idade) {
                    const tempNome = atual.nome;
                    const tempIdade = atual.idade;
                    atual.nome = atual.prox.nome;
                    atual.idade = atual.prox.idade;
                    atual.prox.nome = tempNome;
                    atual.prox.idade = tempIdade;

                    trocou = true;
                }
                atual = atual.prox;
            }
        } while (trocou);

        return this;
    }
    
    toString() {
        let resultado = '';
        let atual = this.head;
        while (atual !== null) {
            resultado += `Nome: ${atual.nome}, Idade: ${atual.idade}\n`;
            atual = atual.prox;
        }
        return resultado.trim();
    }
}

export { Pessoa, Lista };
