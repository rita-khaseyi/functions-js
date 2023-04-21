// You manage a grocery store and need to keep track of the inventory of various items. 
// You will use arrays to store the data and various functions to manipulate and analyze the data.
// Create an array containing the names of all items in the inventory.
// Create a separate array with the corresponding stock quantities of each item.
// Write a function to add a new item to the inventory, updating both arrays.
// Write a function to update the stock quantity of an existing item.
// Write a function to calculate the total number of items in the inventory.
// Write a function to find the item with the lowest stock quantity.









// Create an array containing the names of all items in the inventory
let inventoryItems = ['cokie', 'chocolate', 'cupcake', 'cream'];

// Create a separate array with the corresponding stock quantities of each item
let inventoryQuantities = [10, 20, 15, 5];

// Write a function to add a new item to the inventory, updating both arrays
function addItem(name, quantity) {
  inventoryItems.push(name);
  inventoryQuantities.push(quantity);
}
addItem("cake",60);
console.log(inventoryItems);
console.log(inventoryQuantities);



// Write a function to update the stock quantity of an existing item
function updateItemQuantity(name, quantity) {
  const index = inventoryItems.indexOf(name);
  if (index !== -1) {
    inventoryQuantities[index] = quantity;
  }
}
updateItemQuantity("cake",90)
console.log(inventoryQuantities)

// Write a function to calculate the total number of items in the inventory
function getTotalItems() {
  let total = 0;
  for (let i = 0; i < inventoryItems.length; i++) {
    total += inventoryQuantities[i];
  }
  return total;
}
console.log(getTotalItems())

// Write a function to find the item with the lowest stock quantity
function LowestStockItem() {
  let lowest = Infinity;
  let lowestItem = '';
  for (let i = 0; i < inventoryQuantities.length; i++) {
    if (inventoryQuantities[i] < lowest) {
      lowest = inventoryQuantities[i];
      lowestItem = inventoryItems[i];
    }
  }
  return lowestItem;
}
console.log(LowestStockItem())























