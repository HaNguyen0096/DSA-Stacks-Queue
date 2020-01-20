import Stack from './stack.js';

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
    }

    peek(){
        return this.first.value;
    }

    isEmpty(){
        if (this.first===null){
            return true;
        }
        else {
            return false;
        }
    }

    display(){
        let temp = this.first;
        while (temp!==null){
            console.log(temp.value);
            temp=temp.next;
        }
    }
}

const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
//starTrekQ.display();
//console.log(starTrekQ.peek());


