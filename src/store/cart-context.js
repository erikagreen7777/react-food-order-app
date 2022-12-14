//store folder is convention for storing state
import React from "react";
import Cart from "../components/Cart/Cart";

const CartContext =  React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {}
});

export default CartContext
