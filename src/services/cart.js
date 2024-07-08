async function addItem(userCart, item) {
    userCart.push(item)
}

async function displayCart(userCart) {
    console.log("\n Cart List");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity} | Subtotal = ${item.subtotal()}`)
    })
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1)
    }
}

async function removeItem(userCart, item) {
    const index = userCart.findIndex((value) => value.name === item.name);

    if (index === -1) {
        console.log("Item not found");
        return;
    }

    if (userCart[index].quantity === 1) {
        userCart.splice(index, 1);
        return;
    }

    if (userCart[index].quantity > 1) {
        userCart[index].quantity -= 1;
    }
}

async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0)
}

export {
    addItem,
    calculateTotal,
    displayCart,
    deleteItem,
    removeItem,
}