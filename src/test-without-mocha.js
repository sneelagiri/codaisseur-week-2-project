const ShoppingCart = require("./ShoppingCart")
const cart = new ShoppingCart()
cart.getItems()
cart.addItem("Trash can", 1, 15.5)
cart.getItems()
cart.clear()
cart.getItems()
cart.total()
