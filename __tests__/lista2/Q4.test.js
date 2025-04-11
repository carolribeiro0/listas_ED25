import { criarFila, intercalarFilas } from "../../src/lista2/Q4";

let f1;
let f2;

beforeEach(() => {
    f1 = criarFila(10);
    f2 = criarFila(10);
});

test("Intercalar duas filas com o mesmo número de elementos", () => {
    f1.enqueue("A");
    f1.enqueue("B");
    f1.enqueue("C");

    f2.enqueue("1");
    f2.enqueue("2");
    f2.enqueue("3");

    const resultado = intercalarFilas(f1, f2);

    expect(resultado.toString()).toBe("A, 1, B, 2, C, 3");
});

test("Intercalar duas filas onde uma é maior que a outra", () => {
    f1.enqueue("X");
    f1.enqueue("Y");

    f2.enqueue("9");
    f2.enqueue("8");
    f2.enqueue("7");
    f2.enqueue("6");

    const resultado = intercalarFilas(f1, f2);

    expect(resultado.toString()).toBe("X, 9, Y, 8, 7, 6");
});

test("Intercalar duas filas onde uma está vazia", () => {
    f1.enqueue("João");
    f1.enqueue("Maria");

    const resultado = intercalarFilas(f1, f2);

    expect(resultado.toString()).toBe("João, Maria");
});

test("Intercalar duas filas vazias retorna uma fila vazia", () => {
    const resultado = intercalarFilas(f1, f2);
    expect(resultado.isEmpty()).toBe(true);
    expect(resultado.toString()).toBe("Fila vazia");
});
