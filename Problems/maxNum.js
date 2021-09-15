import Stack from "../Stacks/index.js";

const newStack = new Stack()

// Find the max number of an array

// Difficulty => easy

function maxNum(num) {
    if (Array.isArray(num) && num.length > 1) {

        newStack.push(num[1])
        for (let i = 0; i < num.length; i++) {
            if (num[i] > newStack.peek()) {
                newStack.pop()
                newStack.push(num[i])
            }
        }
    
        return 'maxNum => ' + newStack.peek()
    } else return Error('The numbers must be in array, and the array must not be less than 1 item')
}

console.log(maxNum([4, 6, 8, 10, 15, 29])) // Output: 29