import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartAction from '../actions/cartAction'; 


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartList:[]
        }
    }

    //  addToCart = (itemAdded) => {
    //      console.log(itemAdded);
    //     this.props.cartSelected(itemAdded);
    //  }
    componentWillReceiveProps(nextProps){
        console.log("nextProps",nextProps);
        this.setState({cartList:nextProps.cart});
    }
    componentDidMount(){
        console.log("in did mount", this.props.cart);
        this.setState({ cartList: this.props.cart});
    }

    removeFromCart = (item) =>{
        this.props.actions.removeFromCart(item.id);
    }
    emptyCart = () =>{
        this.props.actions.emptyCart();
    }    

    render() {
        return (
            <div>
                
                <p>No. of items added in cart is- {this.state.cartList.length}</p><br/>
                {
                    (this.state.cartList.length > 0) ?
                    <table>
                        <thead>
                            <tr>
                                <td>Product ID</td>
                                <td>PRODUCT Name</td>
                                <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.cartList.map((item,i) => {
                                    return(
                                        <tr key={i}>
                                        <td><div>{item.id}</div></td><td>{item.name}</td>
                                        <td><button onClick={()=>this.removeFromCart(item)}>Remove From Cart</button></td>
                                        </tr>
                               )})}
                            </tbody>

                    </table>:null
                }
                 <button onClick={()=>this.emptyCart()}>Empty Cart</button>
            </div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state);
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(cartAction, dispatch)
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
