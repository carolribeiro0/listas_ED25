function inverterLista(lista) {
    let anterior = null;
    let atual = lista.head.prox;

    while (atual !== null) {
        let proximo = atual.prox;
        atual.prox = anterior;
        anterior = atual;
        atual = proximo;
    }

    lista.head.prox = anterior;
}

export default inverterLista;
