import { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import { Cart } from "./components/Cart";

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [ show , setShow ] = useState( false ) ;
  return (
    <>
    <button onClick={() => setShow( !show)}>{ !show ?  "Show Cart" : "hide cart"}</button>
      { show && <Cart cart={cart} setCart={setCart} />}
      <Item  setCart={setCart} />
    </>
  );
}

export default App;
