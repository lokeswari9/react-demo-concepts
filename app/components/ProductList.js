import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';

import { connect } from 'react-redux'; //to connect react&redux
import { bindActionCreators } from 'redux'; //to connect all events
import * as cartAction from '../actions/cartAction';
import * as addToAction from '../actions/addToAction';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            addedlist: [],
            searchvalues: []
        }
    }
    componentDidMount() {
        this.getData().then(response => {

            this.setState({ list: response.data });
            console.log(this.state.list)
        });
        this.setState({ addedlist: this.props.addlist });
        this.setState({ searchvalues: this.props.searchvalues });

    }
    getData = () => {
        return new Promise((resolve, reject) => {
            axios.get('https://nodesense.github.io/api/products.json').then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log('willreceiveprops');
        this.setState({ addedlist: nextProps.addlist });
        this.setState({ searchvalues: nextProps.searchvalues })
    }
    cartSelected = (productSelected) => {
        console.log(productSelected);
        this.props.actions.addToCart(productSelected);
    }
    searchItem = (itemSearch) => {
        this.state.list.map((item, index) => {
            if ((itemSearch.trim().toLowerCase()) === (item.name.trim().toLowerCase())) {
                return (
                    this.props.actions1.searchItem(item)
                )
            }
        })

    }

    render() {
        console.log('searchvalues', this.state.searchvalues)
        let arr1;
        if (this.state.searchvalues.length === 0) {
            arr1 = this.state.list;
            arr1.push(...this.state.addedlist);
        }
        else {
            arr1 = this.state.searchvalues;

        }

        return (
            <div>
                <Product list={arr1} searchItem={this.searchItem} cartSelected={this.cartSelected} />
            </div>
        )
    }
}



const mapStateToProps = (state, nextProps) => {

    return {
        //adds newly added list to products
        addlist: state.addlist,
        //to search for products
        searchvalues: state.searchvalues,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(cartAction, dispatch),
        actions1: bindActionCreators(addToAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);