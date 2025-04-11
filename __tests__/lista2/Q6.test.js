import { inverterFila } from "../../src/lista2/Q6.js";
import Fila from "../../src/Fila.js";

test("Inverter fila recursivamente", () => {
    const f = new Fila(10);
    f.enqueue('A');
    f.enqueue('B');
    f.enqueue('C');
    f.enqueue('D');

    const invertida = inverterFila(f);

    expect(invertida.dequeue()).toBe('D');
    expect(invertida.dequeue()).toBe('C');
    expect(invertida.dequeue()).toBe('B');
    expect(invertida.dequeue()).toBe('A');
});
