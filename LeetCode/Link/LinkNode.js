class Node {
  constructor(e) {
    this.element = e
    this.next = null
  }
}

class LinkNodeList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(element) {
    let cur;
    let node = new Node(element)
    if (!this.head) {
      this.head = node
    } else {
      cur = this.head
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    this.length++;
  }

  removeAt(index) {
    let cur = this.head
    let prve
    let i = 0
    if (index === 0) {
      this.head = cur.next
    } else {
      while (i < index) {
        prve = cur
        cur = cur.next
        i++;
      }
      prve.next = cur.next
    }
    return cur.element
  }
  print() {
    let cur = this.head
    let ret = []
    while (cur) {
      ret.push(cur.element)
      cur = cur.next
    }
    console.log(ret.join('==>'))
    return ret.join('==>')
  }
}

let linkNode = new LinkNodeList()
linkNode.append('哈喽')
linkNode.append('你瞅啥')
linkNode.append('嘿嘿')
linkNode.append('抽你咋地')
linkNode.print()
linkNode.removeAt(1)
linkNode.print()