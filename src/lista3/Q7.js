function resolverJosephus(n, d) {
    let soldados = [];
    for (let i = 1; i <= n; i++) {
        soldados.push(i);
    }

    let eliminados = [];
    let indice = 0;
    let total = n;

    while (total > 1) {
        let contador = 1;
        while (contador < d) {
            indice++;
            if (indice >= total) {
                indice = 0;
            }
            contador++;
        }

        eliminados.push(soldados[indice]);
        
        let novaLista = [];
        for (let i = 0; i < total; i++) {
            if (i !== indice) {
                novaLista.push(soldados[i]);
            }
        }

        soldados = novaLista;
        total--;

        if (indice >= total) {
            indice = 0;
        }
    }

    let sobrevivente = soldados[0];
    return { eliminados, sobrevivente };
}

export default resolverJosephus;
