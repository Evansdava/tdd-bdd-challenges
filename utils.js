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
  return shoppingCart
}

const addItemToCart = (item) => {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] === item) {
      shoppingCart[i].quantity++
      return
    }
  }
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  let numItems = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    numItems += shoppingCart[i].quantity
  }
  return numItems
}

const removeItemFromCart = (item) => {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] === item) {
      shoppingCart[i].quantity--
      if (shoppingCart[i].quantity === 0) {
        shoppingCart.splice(i, 1)
      }
      return
    }
  }
}

module.exports = {
  sayHello, area, perimeter, circleArea, clearCart, createItem, getShoppingCart, addItemToCart, getNumItemsInCart, removeItemFromCart
}
