// Creating a shopping list array


let shoppingList = ["milk", "bread", "eggs"];
console.log(shoppingList); // Output: ["milk", "bread", "eggs"]

// Adding items to the beginning of the shopping list
shoppingList.unshift("apples");
shoppingList.unshift("bananas");

console.log(shoppingList); // Output: ["bananas", "apples", "milk", "bread", "eggs"]

// Removing the first item from the shopping list
let removedItem = shoppingList.shift();
console.log(shoppingList); // Output: ["apples", "milk", "bread", "eggs"]
console.log(removedItem); // Output: "bananas"

// Adding multiple items to the beginning of the shopping list
shoppingList.unshift("oranges", "grapes");
console.log(shoppingList); // Output: ["oranges", "grapes", "apples", "milk", "bread", "eggs"]

// Removing multiple items from the end of the shopping list
let removedItems = shoppingList.pop();
console.log(shoppingList); // Output: ["oranges", "grapes", "apples", "milk", "bread"]
console.log(removedItems); // Output: "eggs"

