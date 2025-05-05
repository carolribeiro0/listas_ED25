import MaxHeap from "../../src/lista4/Q2";

let heap;

beforeEach(() => {
    heap = new MaxHeap();
});

function isMaxHeap(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < array.length && array[i] < array[left]) return false;
        if (right < array.length && array[i] < array[right]) return false;
    }
    return true;
}

test("Sequência 1: 44, 98, 78, 1, 67, 30", () => {
    const sequence = [44, 98, 78, 1, 67, 30];
    sequence.forEach(num => heap.insert(num));
    const result = heap.getHeap();
    expect(result[0]).toBe(98);
    expect(isMaxHeap(result)).toBe(true);
});

test("Sequência 2: 12, 55, 63, 17, 2, 9", () => {
    const sequence = [12, 55, 63, 17, 2, 9];
    sequence.forEach(num => heap.insert(num));
    const result = heap.getHeap();
    expect(result[0]).toBe(63);
    expect(isMaxHeap(result)).toBe(true);
});

test("Sequência 3: 7, 95, 32, 44, 28, 13", () => {
    const sequence = [7, 95, 32, 44, 28, 13];
    sequence.forEach(num => heap.insert(num));
    const result = heap.getHeap();
    expect(result[0]).toBe(95);
    expect(isMaxHeap(result)).toBe(true);
});

test("Sequência 4: 21, 41, 53, 64, 1, 90", () => {
    const sequence = [21, 41, 53, 64, 1, 90];
    sequence.forEach(num => heap.insert(num));
    const result = heap.getHeap();
    expect(result[0]).toBe(90);
    expect(isMaxHeap(result)).toBe(true);
});

test("Sequência 5: 77, 19, 37, 27, 2, 99", () => {
    const sequence = [77, 19, 37, 27, 2, 99];
    sequence.forEach(num => heap.insert(num));
    const result = heap.getHeap();
    expect(result[0]).toBe(99);
    expect(isMaxHeap(result)).toBe(true);
});

test("Sequência 6: 13, 8, 29, 101, 44, 67", () => {
    const sequence = [13, 8, 29, 101, 44, 67];
    sequence.forEach(num => heap.insert(num));
    const result = heap.getHeap();
    expect(result[0]).toBe(101);
    expect(isMaxHeap(result)).toBe(true);
});