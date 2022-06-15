class Queue {
    constructor() {
        this.storage = []
        this.counter = 0
    }

    // Method to add an item to the queue
    enqueue(item) {
        if (!item) return Error('Queue is empty')
        else {
            this.storage.push(item)
            this.counter = this.counter + 1
            return item
        }
    }

    // Method to remove the first item and return it
    dequeue() {
        if (this.counter > 0) {
            this.counter = this.counter - 1
            return this.storage.shift()
        } 
        else return Error('Queue is empty')
    }

    // Method to get the first item in queue
    front() {
        if (this.isEmpty()) return Error('Queue is empty')
        else return this.storage.shift()
    }

    // Method to check if the queue is empty or not
    isEmpty() {
        if (this.counter == 0) return true
        else return false
    }

    // Method to get queue size
    size() {
        return this.counter
    }
}

const newQueue = new Queue()