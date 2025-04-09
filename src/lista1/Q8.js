class PilhaDePratos {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.pilhas = []; 
    }

    empilha(valor) {
        if (this.pilhas.length === 0 || this.pilhas[this.pilhas.length - 1].length >= this.capacidade) {
            this.pilhas.push([]);
        }
        this.pilhas[this.pilhas.length - 1].push(valor);
    }

    desempilha() {
        if (this.pilhas.length === 0) {
            return null;
        }

        const ultimaPilha = this.pilhas[this.pilhas.length - 1];
        const valor = ultimaPilha.pop();

        if (ultimaPilha.length === 0) {
            this.pilhas.pop();
        }

        return valor || null;
    }
}

export default PilhaDePratos;