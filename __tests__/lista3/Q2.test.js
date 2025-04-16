import FilaLista from "../../src/lista3/Q2";

let f;

beforeEach(() => {
    f = new FilaLista();
});

test("Fila deve iniciar vazia", () => {
    expect(f.isEmpty()).toBe(true);
    expect(f.size()).toBe(0);
});

test("enqueue deve adicionar no final da fila", () => {
    f.enqueue("A");
    f.enqueue("B");
    f.enqueue("C");
    expect(f.toString()).toBe("ABC");
    expect(f.size()).toBe(3);
});

test("frente deve retornar o primeiro elemento sem remover", () => {
    f.enqueue("X");
    f.enqueue("Y");
    expect(f.frente()).toBe("X");
    expect(f.size()).toBe(2);
});

test("dequeue deve remover e retornar o primeiro elemento", () => {
    f.enqueue("1");
    f.enqueue("2");
    f.enqueue("3");
    expect(f.dequeue()).toBe("1");
    expect(f.toString()).toBe("23");
    expect(f.dequeue()).toBe("2");
    expect(f.dequeue()).toBe("3");
    expect(f.dequeue()).toBe(null);
    expect(f.isEmpty()).toBe(true);
});

test("Várias operações encadeadas", () => {
    f.enqueue("A");
    f.enqueue("B");
    f.dequeue();
    f.enqueue("C");
    expect(f.toString()).toBe("BC");
    expect(f.frente()).toBe("B");
});
