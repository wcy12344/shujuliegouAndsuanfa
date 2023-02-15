/**
 * 队列是一个线性表
 * 特点：是一种先进先出的数据结构
 */

//实现队列
class Queue {
  public items: any[]
  constructor() {
    this.items = []
  }
  // 入队
  enqueue(item: any) {
    this.items.push(item)
  }
  // 出队
  dequeue() {
    return this.items.shift()
  }
  // 查看队头元素
  front() {
    return this.items[0]
  }
  // 查看是否为空
  isEmpty() {
    return this.items.length === 0
  }
  // 查看个数
  size() {
    return this.items.length
  }
  toString() {
    let result = ""
    for (let item of this.items) {
      result += item + " "
    }
    return result
  }
}

//实现优先队列
class QueueElement {
  public element: any
  public priority: number
  constructor(elment: any, priority: number) {
    this.element = elment
    this.priority = priority
  }
}

class PriorityQueue extends Queue {
  constructor() {
    super()
  }
  // 重写父类方法
  // @ts-ignore
  enqueue(element: any, priority: number): void {
    const queueElement = new QueueElement(element, priority)
    // 判断队列是否为空
    if (this.isEmpty()) {
      // 如果为空，不用判断优先级，直接添加
      this.items.push(queueElement)
    } else {
      // 定义一个变量记录是否成功添加了新元素
      let added = false
      for (let i = 0; i < this.items.length; i++) {
        // 让新插入的元素进行优先级比较，priority 值越小，优先级越大
        if (queueElement.priority < this.items[i].priority) {
          // 在指定的位置插入元素
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }

      // 如果遍历完所有元素，优先级都大于新插入的元素，就将新插入的元素插入到最后
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }
  // dequeue() 出队，从队列中删除前端元素，返回删除的元素
  // 继承 Queue 类的 dequeue()
  dequeue(): any {
    return super.dequeue()
  }

  // front() 查看队列的前端元素
  // 继承 Queue 类的 front()
  front() {
    return super.front()
  }

  // isEmpty() 查看队列是否为空
  // 继承 Queue 类的 isEmpty()
  isEmpty() {
    return super.isEmpty()
  }

  // size() 查看队列中元素的个数
  // 继承 Queue 类的 size()
  size() {
    return super.size()
  }

  // toString() 将队列中元素以字符串形式返回
  // 重写 toString()
  toString() {
    let result = ""
    for (let item of this.items) {
      result += item.element + "-" + item.priority + " "
    }
    return result
  }
}
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("A", 10);
priorityQueue.enqueue("B", 15);
priorityQueue.enqueue("C", 11);
priorityQueue.enqueue("D", 20);
priorityQueue.enqueue("E", 18);
console.log(priorityQueue.items);