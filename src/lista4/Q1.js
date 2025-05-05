class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
    }
}

class FilaPrioridade {
    constructor() {
        this.tree = [];
        this.size = 0;
        this.tree[0] = new Node(null, -Infinity);
    }

    insert(data, priority) {
        const newNode = new Node(data, priority);
        this.tree[++this.size] = newNode;
        this.heapifyUp(this.size);
    }

    extractMin() {
        if (this.size === 0) return null;

        const minNode = this.tree[1];
        this.tree[1] = this.tree[this.size--];
        this.heapifyDown(1);

        return minNode;
    }

    peek() {
        return this.size > 0 ? this.tree[1] : null;
    }

    heapifyUp(index) {
        while (index > 1 && this.tree[index].priority < this.tree[Math.floor(index / 2)].priority) {
            this.swap(index, Math.floor(index / 2));
            index = Math.floor(index / 2);
        }
    }

    heapifyDown(index) {
        while (2 * index <= this.size) {
            let smallest = 2 * index;
            if (smallest + 1 <= this.size && this.tree[smallest + 1].priority < this.tree[smallest].priority) {
                smallest = smallest + 1;
            }

            if (this.tree[index].priority <= this.tree[smallest].priority) break;

            this.swap(index, smallest);
            index = smallest;
        }
    }

    swap(i, j) {
        [this.tree[i], this.tree[j]] = [this.tree[j], this.tree[i]];
    }
}

export { Node, FilaPrioridade };