import React, { Component } from 'react';


class Product extends Component {
   

    addToCart = (itemAdded) => {
        console.log(itemAdded);
        this.props.cartSelected(itemAdded);
    }
    submitEvent = (event) => {
        event.preventDefault();
        const event1 = this.event1.value;
        console.log(event1);
        this.props.searchItem(event1);
    }
    render() {
        return (
            <div>
           <div>
            <form onSubmit={this.submitEvent}>
                <input type="text" name="search" id="13" placeholder="search for...." 
                    ref={(user)=> this.event1 = user}/>
                <button type="submit">OK</button>
                </form>
            </div>
           <div>
                <table align="center">
                    <thead>
                        <tr>
                            <td> Product Id</td>
                            <td> Product name</td>
                            <td> Action</td>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.list.map((item,i) =>{
                            return(
                                 <tr key={i}>
                                 <td><div>{item.id}</div></td><td>{item.name}</td>
                                 <td><button onClick ={()=>this.addToCart(item)} >Add To Cart</button></td>
                                 </tr>
                        )})}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

export default Product;

