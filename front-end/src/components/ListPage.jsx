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
          product: 'Water bottle',
          price: 1,
          Description: 'A bottle of water',
          Image: 'https://distillata.com/wp-content/uploads/2018/04/Distilled-20-oz.jpg'
        },
        {
          product: 'Hair dryer',
          price: 20,
          Description: 'It helps dry your hair faster'
        },
        {
          product: 'Shoes',
          price: 50,
          Description: 'Size 9'
        }
      ]

      const displayList = list.map(item => 
      <div> 
        Product: {item.product} <br/>
        Price: ${item.price}  <br/>
        Description: {item.Description} <br/>
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
          
        <div class = "text-center"> {displayList}</div>
        
      );
    }
}
