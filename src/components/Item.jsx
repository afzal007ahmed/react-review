import React, { useMemo, useState } from "react";
import { data } from "../data";

const Item = ({setCart }) => {
 
  const [ dataState , setDataState ] = useState( data.inventory.map(( item ) => ({...item , visible : false})) ) ;
  
  return (
    <div style={{ display: "flex", flexWrap: "wrap" , gap :20 , alignItems : "start" }}>
      {dataState.map((item) => (
        <div style={{ border : "1px solid black" , padding : 30 }}>
          <h1>{item.name}</h1>
          <h4>{item.brand.name}</h4>
          <button onClick={() => {setDataState( ( prev ) => prev.map(( newitem ) => ({ ...newitem , visible : newitem.id === item.id ? !newitem.visible : newitem.visible}))) }}> show </button>
          { item.visible && <div>
            { item.variants.map(( item2 ) => <div>
               <div style={{ padding : 10 , margin : 20 , border : "1px solid black"}}>
                { item2.attributes.colour } / {item2.attributes.size }
                <p style={{ fontWeight : 700}}>{ item2.pricing.salePrice}</p>
                <div style={{ display : "flex" , gap : 10 , alignItems : 'center'}}>
                <button onClick={() => { setCart(( prev ) => ([...prev , {...item , variant : item2 } ]))}}>+</button>
                <p>0</p>
                <button>-</button>
               </div>
               </div>
            </div>)}
          </div>}
        </div>
      ))}
    </div>
  );
};

export default Item;
