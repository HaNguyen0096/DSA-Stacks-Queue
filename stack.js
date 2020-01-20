class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
  
class Stack {
    constructor() {
        this.top = null;
    }
  
    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
  
        const node = new _Node(data, this.top);
        this.top = node;
    }
  
    pop(){
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek(){
        return this.top.data;
    }

    isEmpty(){
        if (this.top===null){
            return true;
        }
        else {
            return false;
        }
    }

    display(){
        let temp = this.top;
        while (temp!==null){
            console.log(temp.data);
            temp=temp.next;
        }
    }

}

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
//console.log(starTrek.peek());

//starTrek.display();



function sort(intStack){
    let tmpStack = new Stack();
    while(intStack.top!==null){
        let temp = intStack.pop();
        while(!tmpStack.isEmpty() && tmpStack.peek()>temp){
            intStack.push(tmpStack.pop());
        }
        tmpStack.push(temp);
    }
    return tmpStack.display();
}
const intStack = new Stack();
intStack.push(2);
intStack.push(5);
intStack.push(3);
intStack.push(4);

console.log(sort(intStack));



//palindrome function
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    console.log(s);
    let str = new Stack();

    for (let i = 0; i < s.length; i++) {
        str.push(s[i]);
    }
    
    let newStr = "";
    while (str.top !== null) {
        newStr+=str.pop();
    }
    return newStr===s;
}

// True, true, true, false
//console.log(is_palindrome("dad"));
//console.log(is_palindrome("A man, a plan, a canal: Panama"));
//console.log(is_palindrome("1001"));
//console.log(is_palindrome("Tauhida"));





function matchParentheses(str){
    const isMatch = (s1,s2) => {
        if ((s1==="(") && (s2===")")){
            return true;
        }
        else if ((s1==="{") && (s2==="}")){
            return true;
        }
        else if ((s1==="[") && (s2==="]")){
            return true;
        }
        else
            return false;
    }
    let s = new Stack();
    for(let i=0; i<str.length; i++){
        if ((str[i]=="(") || (str[i]=="[") || (str[i]=="{")){
            s.push(str[i]);
        }
        if ((str[i]==")") || (str[i]=="]") || (str[i]=="}")){
            if (s.isEmpty()){
                return false;
            }
            else if(!isMatch(s.pop(),str[i])){
                return false;
            }
        }
        
    }
    return true;

}

//console.log(matchParentheses('([1+2)])+3'));




