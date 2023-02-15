/**
 * 栈是一种线性表
 * 特点：一种先进后出，或者叫做后进先出的一种数据结构
 * 
 */
// 简单实现一个栈

class Stack {
    items: any[];
    constructor() {
        this.items = []
    }
    //压栈
    push(item: any) {
        this.items.push(item)
    }
    //退栈
    pop() {
        return this.items.pop()
    }
    //查看栈顶元素
    peek() {
        return this.items[this.items.length - 1]
    }
    // 判断栈是否为空
    isEmpty() {
        return this.items.length === 0
    }
    // 获取栈中个数
    size() {
        return this.items.length
    }
    // 以字符串形式返回栈内元素
    toString() {
        let result = ''
        for(let i of this.items) {
            result += i + " "
        }
        return result
    }
}

// 利用stack实现一个简易的二进制转换
function dec2bin(dec: number): string {
    const stack = new Stack()
    while(dec > 0) {
        stack.push(dec % 2)
        dec = Math.floor(dec / 2)
    }
    let binaryString = ""
    while(!stack.isEmpty()) {
        binaryString += stack.pop()
    }
    return binaryString
}

console.log(dec2bin(100));