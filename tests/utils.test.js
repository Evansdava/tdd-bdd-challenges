const mocha = require('mocha')
const chai = require('chai')
const utils = require('../utils')
const expect = chai.expect
const it = mocha.it

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it('should say hello', function () {
  const hello = utils.sayHello()
  expect(hello).to.be.a('string')
  expect(hello).to.equal('Hello')
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// ========================================================

it('should return the area of a 5 by 6 rectangle', function () {
  const area = utils.area(5, 6)
  expect(area).to.be.a('number')
  expect(area).to.equal(30)
})

it('area should return null if w or l is negative', function () {
  let area = utils.area(-5, 6)
  expect(area).to.be.a('null')

  area = utils.area(5, -6)
  expect(area).to.be.a('null')

  area = utils.area(-5, -6)
  expect(area).to.be.a('null')
})

it('area should return null if non-number arguments are passed', function () {
  let area = utils.area('string', 6)
  expect(area).to.be.a('null')

  area = utils.area(5, 'string')
  expect(area).to.be.a('null')

  area = utils.area('string', 'otherstring')
  expect(area).to.be.a('null')

  area = utils.area([], 6)
  expect(area).to.be.a('null')

  area = utils.area(5, [])
  expect(area).to.be.a('null')

  area = utils.area([], [])
  expect(area).to.be.a('null')
})

it('should return the perimeter of a 5 by 6 rectangle', function () {
  const perim = utils.perimeter(5, 6)
  expect(perim).to.be.a('number')
  expect(perim).to.equal(22)
})

it('perimeter should return null if w or l is negative', function () {
  let perim = utils.perimeter(-5, 6)
  expect(perim).to.be.a('null')

  perim = utils.perimeter(5, -6)
  expect(perim).to.be.a('null')

  perim = utils.perimeter(-5, -6)
  expect(perim).to.be.a('null')
})

it('perimeter should return null if non-number arguments are passed', function () {
  let perim = utils.perimeter('string', 6)
  expect(perim).to.be.a('null')

  perim = utils.perimeter(5, 'string')
  expect(perim).to.be.a('null')

  perim = utils.perimeter('string', 'otherstring')
  expect(perim).to.be.a('null')

  perim = utils.perimeter([], 6)
  expect(perim).to.be.a('null')

  perim = utils.perimeter(5, [])
  expect(perim).to.be.a('null')

  perim = utils.perimeter([], [])
  expect(perim).to.be.a('null')
})

it('should return the area of a circle of radius 5', function () {
  const circleArea = utils.circleArea(5)
  expect(circleArea).to.be.a('number')
  expect(circleArea).to.equal(Math.PI * 25)
})

it('should return null if r is negative', function () {
  const circleArea = utils.circleArea(-5)
  expect(circleArea).to.be.a('null')
})

it('circleArea should return null if non-number arguments are passed', function () {
  let circleArea = utils.circleArea('string')
  expect(circleArea).to.be.a('null')

  circleArea = utils.circleArea([])
  expect(circleArea).to.be.a('null')
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of 'Pending Tests' in Chai. Someone should write these
// tests eventually.
// ========================================================

it('Should create a new (object) Item with name and price', function () {
  const item = utils.createItem('apple', 0.99)
  expect(item).to.be.a('object')
  expect(item).to.have.property('name', 'apple')
  expect(item).to.have.property('price', 0.99)
  expect(item).to.have.property('quantity', 1)
})

it('Should return an array containing all items in cart', function () {
  const apple = utils.createItem('apple', 0.99)
  const banana = utils.createItem('banana', 0.20)
  const melon = utils.createItem('melon', 1.29)
  const cart = [apple, banana, melon]

  const items = utils.getItems(cart)

  expect(items).to.be.a('array')
  expect(items).to.equal(cart)
})

it('Should add a new item to the shopping cart')

it('Should return the number of items in the cart')

it('Should remove items from cart')

// ========================================================
// Stretch Challenges
// ========================================================

it('Should update the count of items in the cart')

it('Should validate that an empty cart has 0 items')

it('Should return the total cost of all items in the cart')
