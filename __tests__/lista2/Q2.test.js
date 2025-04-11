import FilaComPilhas from "../../src/lista2/Q2";

let fila;

beforeEach(() => {
    fila = new FilaComPilhas();
});

test("Fila deve estar vazia ao ser criada", () => {
    expect(fila.isEmpty()).toBe(true);
    expect(fila.length()).toBe(0);
});

test("enqueue deve adicionar elementos e front deve retornar o primeiro", () => {
    fila.enqueue("A");
    fila.enqueue("B");
    fila.enqueue("C");
    expect(fila.front()).toBe("A");
    expect(fila.length()).toBe(3);
});

test("dequeue deve remover elementos na ordem FIFO", () => {
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);
    expect(fila.dequeue()).toBe(1);
    expect(fila.dequeue()).toBe(2);
    expect(fila.front()).toBe(3);
});

test("toString deve mostrar os elementos na ordem correta", () => {
    fila.enqueue("X");
    fila.enqueue("Y");
    fila.enqueue("Z");
    expect(fila.toString()).toBe("X, Y, Z");
});
