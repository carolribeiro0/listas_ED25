import MaxHeap from "./Q3";

function verificarMegaSena(numerosSorteados, apostas) {
    const heap = new MaxHeap();

    apostas.forEach((aposta, index) => {
        const acertos = aposta.filter(num => numerosSorteados.includes(num)).length;
        heap.insert({ index: index + 1, acertos });
    });

    const vencedores = { sena: [], quina: [] };

    while (heap.getHeap().length > 0) {
        const { index, acertos } = heap.extractMax();
        if (acertos === 6) {
            vencedores.sena.push(index);
        } else if (acertos === 5) {
            vencedores.quina.push(index);
        }
    }

    vencedores.sena.sort((a, b) => a - b);
    vencedores.quina.sort((a, b) => a - b);

    return vencedores;
}

export default verificarMegaSena;