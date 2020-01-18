// const ShoppingCart = require("./ShoppingCart")
// const cart = new ShoppingCart()
// cart.getItems()
// cart.addItem("Trash can", 1, 15.5)
// cart.getItems()
// cart.clear()
// cart.getItems()
// cart.total()

const groupAdultsByAgeRange = require("./transform").groupAdultsByAgeRange
// const grouping = groupAdultsByAgeRange([])
// console.log(grouping)
const grouping2 = groupAdultsByAgeRange([
  { name: "pete", age: 10 },
  { name: "dove", age: 17 },
])
console.log(grouping2)
