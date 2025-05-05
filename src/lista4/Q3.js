class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
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

    heapifyDown(index) {
        let currentIndex = index;
        const length = this.heap.length;

        while (true) {
            const leftIndex = 2 * currentIndex + 1;
            const rightIndex = 2 * currentIndex + 2;
            let largest = currentIndex;

            if (leftIndex < length && this.heap[leftIndex] > this.heap[largest]) {
                largest = leftIndex;
            }

            if (rightIndex < length && this.heap[rightIndex] > this.heap[largest]) {
                largest = rightIndex;
            }

            if (largest === currentIndex) break;

            [this.heap[currentIndex], this.heap[largest]] = [this.heap[largest], this.heap[currentIndex]];
            currentIndex = largest;
        }
    }

    getHeap() {
        return [...this.heap];
    }
}

export default MaxHeap;