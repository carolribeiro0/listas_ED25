function embaralharLista(lista) {
    let elementos = [];
    let atual = lista.head.prox;
    while (atual) {
        elementos.push(atual.elemento);
        atual = atual.prox;
    }

    for (let i = elementos.length - 1; i > 0; i--) {
        let j = parseInt(Math.random() * (i + 1));
        [elementos[i], elementos[j]] = [elementos[j], elementos[i]];
    }

    lista.head.prox = null;

    for (let e of elementos) {
        lista.append(e);
    }
}

export default embaralharLista;
