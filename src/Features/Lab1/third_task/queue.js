import { LinkedList } from "./linkedList.js";

class Queue {
	constructor(maxSize = Infinity) {
		this.queue = new LinkedList();
		this.size = 0;
		this.maxSize = maxSize;
	}

	hasRoom() {
		return this.size < this.maxSize;
	}

	isEmpty() {
		return this.size === 0;
	}

	enqueue(data) {
		if (typeof data !== 'number') {
			throw new Error('The data must be of a number type!');
		}
		if (this.hasRoom()) {
			this.queue.addToTail(data);
			this.size++;
			console.log(`The ${data} was added in the queue, which contains ${this.size} items`)
		}
	}

	dequeue() {
		if (!this.isEmpty()) {
			const data = this.queue.removeHead();
			this.size--;
			console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);

			return data;
		} else {
			throw new Error('The queue is empty!');
		}
	}

	peek() {
		if(!this.isEmpty()) {
			console.log(`The element at the front is: ${this.queue.head.data}`);
		}
	}

	queueLength() {
		if(!this.isEmpty()) {
			console.log(this.size);
		}
	}

}

const queue1 = new Queue(5);

queue1.enqueue(20);
queue1.enqueue(1);
queue1.enqueue(50);
queue1.enqueue(100);

console.log(queue1);
console.log(queue1.dequeue());
console.log(queue1.peek());
console.log(queue1.queueLength());
console.log(queue1);

export default Queue;