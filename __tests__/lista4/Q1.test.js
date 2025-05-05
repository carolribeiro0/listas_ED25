import { FilaPrioridade } from "../../src/lista4/Q1";

let fila;

beforeEach(() => {
    fila = new FilaPrioridade();
});

test("Insere elementos e verifica o menor elemento", () => {
    fila.insert("Tarefa 1", 5);
    fila.insert("Tarefa 2", 2);
    fila.insert("Tarefa 3", 8);

    expect(fila.peek().data).toBe("Tarefa 2");
    expect(fila.peek().priority).toBe(2);
});

test("Remove o menor elemento e verifica o próximo", () => {
    fila.insert("Tarefa 1", 5);
    fila.insert("Tarefa 2", 2);
    fila.insert("Tarefa 3", 8);

    const min = fila.extractMin();
    expect(min.data).toBe("Tarefa 2");
    expect(min.priority).toBe(2);

    expect(fila.peek().data).toBe("Tarefa 1");
    expect(fila.peek().priority).toBe(5);
});

test("Verifica comportamento com heap vazio", () => {
    expect(fila.peek()).toBeNull();
    expect(fila.extractMin()).toBeNull();
});

test("Insere múltiplos elementos e verifica a ordem de remoção", () => {
    fila.insert("Tarefa 1", 10);
    fila.insert("Tarefa 2", 15);
    fila.insert("Tarefa 3", 5);
    fila.insert("Tarefa 4", 1);

    const removidos = [];
    while (fila.peek() !== null) {
        removidos.push(fila.extractMin().data);
    }

    expect(removidos).toEqual(["Tarefa 4", "Tarefa 3", "Tarefa 1", "Tarefa 2"]);
});