import MaxHeap from "../../src/lista4/Q3";

let heap;

beforeEach(() => {
    heap = new MaxHeap();
});

test("Remoção de elementos da sequência 1: 44, 98, 78, 1, 67, 30", () => {
    const sequence = [44, 98, 78, 1, 67, 30];
    sequence.forEach(num => heap.insert(num));

    const removidos = [];
    while (heap.getHeap().length > 0) {
        removidos.push(heap.extractMax());
    }

    expect(removidos).toEqual([98, 78, 67, 44, 30, 1]);
});