class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let currentIndex = index;
        while (
            currentIndex > 0 &&
            this.heap[currentIndex] > this.heap[Math.floor((currentIndex - 1) / 2)]
        ) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
        }
    }

    getHeap() {
        return [...this.heap];
    }
}

export default MaxHeap;