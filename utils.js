// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return 'Hello'
}

const area = (w, h) => {
  if ((w < 0 | h < 0) | (typeof w !== 'number') | (typeof h !== 'number')) {
    return null
  }
  return w * h
}

const perimeter = (w, h) => {
  if ((w < 0 | h < 0) | (typeof w !== 'number') | (typeof h !== 'number')) {
    return null
  }
  return w + w + h + h
}

const circleArea = r => {
  if (r < 0 | typeof r !== 'number') {
    return null
  }
  return Math.PI * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
}

module.exports = { 
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
