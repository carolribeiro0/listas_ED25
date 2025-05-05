import verificarMegaSena from "../../src/lista4/Q4";

test("Verifica vencedores da Mega-Sena com heap reutilizado", () => {
    const numerosSorteados = [5, 12, 23, 34, 45, 56];
    const apostas = [
        [5, 12, 23, 34, 45, 56], // Sena
        [5, 12, 23, 34, 45],     // Quina
        [1, 2, 3, 4, 5, 6],      // Nada
        [12, 23, 34, 45, 56]     // Quina
    ];

    const resultado = verificarMegaSena(numerosSorteados, apostas);

    expect(resultado.sena).toEqual([1]);
    expect(resultado.quina).toEqual([2, 4]);
});

test("Nenhum vencedor", () => {
    const numerosSorteados = [5, 12, 23, 34, 45, 56];
    const apostas = [
        [1, 2, 3, 4, 7, 8],
        [9, 10, 11, 13, 14, 15]
    ];

    const resultado = verificarMegaSena(numerosSorteados, apostas);

    expect(resultado.sena).toEqual([]);
    expect(resultado.quina).toEqual([]);
});

test("Apenas vencedores da quina", () => {
    const numerosSorteados = [5, 12, 23, 34, 45, 56];
    const apostas = [
        [5, 12, 23, 34, 45], // Quina
        [12, 23, 34, 45, 56] // Quina
    ];

    const resultado = verificarMegaSena(numerosSorteados, apostas);

    expect(resultado.sena).toEqual([]);
    expect(resultado.quina).toEqual([1, 2]);
});