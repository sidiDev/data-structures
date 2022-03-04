export default class Stack {
    constructor () {
        // Stack storage
        this.storage = []
        // Stack size
        this.size = 0
    }

    // Add an item in the stack
    push(value) {
        if (value) {
            this.storage.push(value)
            this.size = this.size + 1
            return true
        } else return Error('There is no value')
    }

    // Remove the last item
    pop() {
        if (!this.isEmpty()) {
            const topItem = this.storage[this.size - 1]
            this.storage.length = this.size - 1
            this.size = this.size - 1
            return topItem
            
        } else return Error('The stack is empty')
    }

    // Return the top item of stack
    peek() {
        if (!this.isEmpty()) return this.storage[this.size - 1]
        else return Error('The stack is empty')
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size > 0 ? false : true
    }

    // Return the size of stack
    size = this.size
}

const newStack = new Stack()

/*

// Push items
newStack.push('1')
newStack.push('3')
newStack.push('4')
newStack.push('5')

console.log(newStack.storage) // Output will be: [ '1', '3', '4', '5' ]

// Remove the top item of the stack
newStack.pop()

console.log('Storage:', newStack.storage) // Output will be: [ '1', '3', '4' ]

// Return the top item of the stack
console.log(newStack.peek()) // Output will be: 4

// If the stack is empty will return true else will return false
console.log('Is empty:', newStack.isEmpty()) // Output will be: false

// Return the size of the stack
console.log('Size:', newStack.size);

*/