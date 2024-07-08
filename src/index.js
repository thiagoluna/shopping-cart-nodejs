import * as itemService from "./services/item.js";
import * as cartService from "./services/cart.js";

const userCart = [];
const userWishList = [];

console.log("Shopping Cart")

const item1 = await itemService.createItem("Notebook", 5000.50, 2);
const item2 = await itemService.createItem("Mouse", 10.50, 2);
const item3 = await itemService.createItem("Touchpad", 1.50, 2);
const item4 = await itemService.createItem("Pendrive", 8.50, 1);

await cartService.addItem(userCart, item1);
await cartService.addItem(userCart, item2);
await cartService.addItem(userCart, item3);
await cartService.addItem(userWishList, item4);

console.log(await cartService.displayCart(userCart));
console.log("Total Cart with all items: " + await cartService.calculateTotal(userCart));

await cartService.deleteItem(userCart, item2.name);
await cartService.displayCart(userCart);
console.log("Total Cart with 2 items: " + await cartService.calculateTotal(userCart));

await cartService.removeItem(userCart, item1);
await cartService.displayCart(userCart);
console.log("Total Cart with less 1 Notebook: " + await cartService.calculateTotal(userCart));
