import Fila from "../src/Fila";

let fila;

beforeEach(() => {
    fila = new Fila();
})



test("Uma fila recem incializada está vazia, não está cheia e o tamanho é zero", () => {
    expect(fila.isEmpty()).toBe(true);
    expect(fila.isFull()).toBe(false);
    expect(fila.length()).toBe(0);
})

test('Após uma série de dados enfileirados, o primeiro elemento deve ser o front', () => {
    fila.enqueue(7);
    fila.enqueue(3);
    fila.enqueue(5);
    expect(fila.front()).toBe(7);
    fila.dequeue();
    expect(fila.front()).toBe(3);
    fila.dequeue();
    expect(fila.front()).toBe(5);
})

test("Fila deve armazenar elementos na ordem correta", () => {
    fila.enqueue('X');
    fila.enqueue('Y');
    fila.enqueue('Z');
    expect(fila.toString()).toBe("X, Y, Z");
});