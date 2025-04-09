import PilhaDePratos from "../../src/lista1/Q8.js";

test("Deve empilhar e desempilhar pratos corretamente", () => {
    const pilhaDePratos = new PilhaDePratos(3);

    pilhaDePratos.empilha(5);
    pilhaDePratos.empilha(10);
    pilhaDePratos.empilha(15);
    pilhaDePratos.empilha(20);

    expect(pilhaDePratos.desempilha()).toBe(20); 
    expect(pilhaDePratos.desempilha()).toBe(15);
    expect(pilhaDePratos.desempilha()).toBe(10);
    expect(pilhaDePratos.desempilha()).toBe(5);
    expect(pilhaDePratos.desempilha()).toBe(null);
});

test("Deve lidar com pilhas vazias", () => {
    const pilhaDePratos = new PilhaDePratos(2);

    expect(pilhaDePratos.desempilha()).toBe(null);

    pilhaDePratos.empilha(1);
    expect(pilhaDePratos.desempilha()).toBe(1);
    expect(pilhaDePratos.desempilha()).toBe(null);
});

test("Deve criar múltiplas pilhas quando necessário", () => {
    const pilhaDePratos = new PilhaDePratos(2);

    pilhaDePratos.empilha(1);
    pilhaDePratos.empilha(2);
    pilhaDePratos.empilha(3);
    pilhaDePratos.empilha(4);
    pilhaDePratos.empilha(5);

    expect(pilhaDePratos.desempilha()).toBe(5);
    expect(pilhaDePratos.desempilha()).toBe(4);
    expect(pilhaDePratos.desempilha()).toBe(3);
    expect(pilhaDePratos.desempilha()).toBe(2);
    expect(pilhaDePratos.desempilha()).toBe(1);
    expect(pilhaDePratos.desempilha()).toBe(null);
});