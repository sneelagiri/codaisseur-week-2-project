module.exports = class {
  constructor() {
    this.items = []
  }

  getItems() {
    // console.log(this.items)
    return this.items
  }
  
  
  addItem(itemName, quantity, price) {
    const item = {
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    }
    this.items.push(item)
    return this.items
  }

  clear() {
    this.items = []
    return this.items
  }

  total() {
    const total = this.items.reduce((total, currentProduct) => {
      return total + (currentProduct.pricePerUnit * currentProduct.quantity) 
    }, 0)
    // console.log(total)
    return total
  }
 
}


