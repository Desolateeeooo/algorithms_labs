import {LinkedList} from "./linkedList.js";

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }
		
	hasRoom() {
		if (this.size < this.maxSize) {
			return true;
		} else {
			return false;
		}
	}

	isEmpty() {
		if (this.size === 0) {
			return true;
		} else {
			return false;
		}
	}

  push(value) {
		if (typeof value !== 'string') {
			throw new Error('The value must be of a string type');
		}
		if (this.hasRoom()) {
			this.stack.addToHead(value);
			this.size++;
		} else {
			throw new Error('Stack is full')
		}
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;

      return value;
    } else {
      console.log("Stack is empty.");
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }
}

export default Stack;

const stack1 = new Stack(5);

stack1.push('First command');
stack1.push('Second command');
stack1.push('Third command');
stack1.push('Fourth command');

console.log(stack1.pop());

console.log(stack1);
console.log(stack1.peek());