import { createContext } from "react";
//{namedImport}

const CartContext = createContext({
  cart:{},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},


})

export default CartContext;