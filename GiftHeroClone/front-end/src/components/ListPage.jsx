import * as React from "react";
import Item from './Item'
import {Link} from 'react-router-dom';
export default class ListPage extends React.Component {

    render() {
      const list = [
        {
          id: 1,
          product: 'Water bottle',
          price: 1,
          Description: 'A bottle of water',
          Image: 'https://distillata.com/wp-content/uploads/2018/04/Distilled-20-oz.jpg'
        },
        {
          id: 2,
          product: 'Hair dryer',
          price: 20,
          Description: 'It helps dry your hair faster',
          Image: 'https://target.scene7.com/is/image/Target/GUEST_b981d58e-1d8d-45b5-b642-124116b9e4a8?wid=488&hei=488&fmt=pjpeg'
        },
        {
          id: 3,
          product: 'Shoes',
          price: 50,
          Description: 'Size 9',
          Image: 'https://res.cloudinary.com/atoms-shoes/image/upload/c_scale,w_1400,q_auto,f_auto/v1622733115/products/shoes/model000/black-white_profile'
        }
      ]

      const displayList = list.map(x => <Item key = {x.id} item = {x}/>) // Item is the component name and 'item' is the name of the item we're passing in

      return (

        <div className = "text-center">
          <div>
          <h1> List page </h1>
          <Link to= "/editprofile" style = {{float:"right"}}>
            <button > Edit profile </button>
          </Link>
          </div>
          <br/><br/><br/>
          <div className = "items"> 
          {displayList} </div>
        </div>
      );
    }
}
