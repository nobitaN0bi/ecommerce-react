import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
function Products({cart, increaseQuantity, decreaseQuantity}) {
    
  let [products, setProducts] = useState([]);

  console.log(useWindowSize());
  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then(
      (response) => {
        return response.json();
      }
    ).then((res) => {
      console.log(res);
      setProducts(res);
    })
  }, [])

  
    return (
      <div>
          <div><Effect /></div>
            {
                products.map(function (item, index) {
                  return (<ProductCard key={index}  product={item}  cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>)
                })
            }
        </div>
    )
}
export let a = 10;
export let b = 20;
export default Products;
