import React,{Component} from 'react';
import data from './data.json';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartAction from '../actions/cartAction';
import * as addToAction from '../actions/addToAction';

class AddToList extends Component{
    constructor(){
        super();
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        this.setState({products: data})
    }
    addToCart=(itemslist)=>{
        console.log(itemslist);
        this.props.actions1.addToCart(itemslist);
    }
    prolistSelected = (itemslist) =>{
        this.props.actions.prolistSelected(itemslist);
    }
    render(){
        return(
            <div>
                <table align="center">
                <thead>
                    <tr>
                        <th>ProductId</th>
                        <th>ProductName</th>
                        <th>Action To ProductList</th>
                        <th>Action To Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.map((list1, index) => {
                    return (
                        <tr key={index}>
                            <td>{list1.id}</td>
                            <td>{list1.name}</td>
                            <td><button onClick={() => this.prolistSelected(list1)}>Add To products</button></td>
                            <td><button onClick={() => this.addToCart(list1)}>Add To cart</button></td>
                        </tr>
                    )
                    })}
                </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state);
    return {
       // cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(addToAction, dispatch),
        actions1:bindActionCreators(cartAction,dispatch)
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(AddToList);