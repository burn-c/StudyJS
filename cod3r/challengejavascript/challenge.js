const cart = [
  { name: 'Pen', quantity: 10, price: 7.99 },
  { name: 'Printer', quantity: 0, price: 649.50},
  { name: 'Book', quantity: 4, price: 27.10},
  { name: 'Pencil', quantity: 3, price: 5.82},
  { name: 'Scissors', quantity: 1, price: 19.20},
]

Array.prototype.myFilter = function(fn) {
  const filtered = [];

  for(let element of this) {
    if(fn(element)) {
      filtered.push(element);
    }
  }

  return filtered;

}

Array.prototype.myMap = function(fn) {
  const mapped = [];

  for(let element of this) {
    mapped.push(fn(element));
  }

  return mapped;
}

Array.prototype.myReduce = function(fn, initial) {
  let last = initial;

  for(let element of this) {
    if(last === undefined) {
      last = element;
      continue
    }
    console.log(last, element);
    last = fn(last, element);
  }

  return last;

}

const quantityGreaterThanZero = item => item.quantity > 0;
const totalItem = item => item.quantity * item.price;
const add = (a, b) => a + b;

const result =
cart
  .myFilter(quantityGreaterThanZero)
  .myMap(totalItem)
  .myReduce(add, 0);


console.log(result);
