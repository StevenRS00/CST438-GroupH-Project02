import * as React from "react";

export default class ListPage extends React.Component {
    state = {
      loading: true,
      person: null
    };

    async componentDidMount() {
      const url = "https://api.randomuser.me/";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({person: data.results[0], loading: false});
    }

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

      const displayList = list.map(item => 
      <div key = {item.id}> 
        Product: {item.product} <br/>
        Price: ${item.price}  <br/>
        Description: {item.Description} <br/>
        <img src ={item.Image} height= "250px"/>
        <hr/>
      </div>)

      return (
          // <div id = "pictures">  
          //   {this.state.loading || !this.state.person ? (
          //   <div className = "text-center"> loading... </div> )
          //   : ( 
          //     <div class = "text-center" style={{"color": "red", "backgroundColor": "lightBlue", "font-size": "51px"}}> 
          //       <div> {this.state.person.name.title} </div>
          //       <div> {this.state.person.name.first} </div>
          //       <div> {this.state.person.name.last} </div>
          //       <div> <img src = {this.state.person.picture.large} /> </div>
          //     </div>
          //   )
          //   }
          // </div>
        <div className = "text-center">
          <h1> List page </h1>
          <div> {displayList}</div>
        </div>
      );
    }
}
