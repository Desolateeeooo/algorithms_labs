import { Node } from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(value) {
    const nextNode = new Node(value);
    const currentHead = this.head;
    this.head = nextNode;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(value) {
    let tail = this.head;

    if (!tail) {
      this.head = new Node(value);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(value));
    }
  }

  removeHead() {
    const removedHead = this.head;

    if (!removedHead) return;

    this.head = removedHead.getNextNode();
    return removedHead.data;
  }
}

export {LinkedList};
