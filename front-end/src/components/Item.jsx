import * as React from "react";

function Item({item}) {
    return (
      <div key = {item.id}> 
        Product: {item.product} <br/>
        Price: ${item.price}  <br/>
        Description: {item.Description} <br/>
        <img src ={item.Image} height= "250px"/>
        <hr/>
      </div>
    );
}
export default Item