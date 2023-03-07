import React,{Component} from 'react';
//import Product from './Product';
import AjaxHOC from './AjaxHOC';

class ProductListHOC extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <p>Product length {this.props.data.length}</p>
               {/* <Product list={this.props.data}/>*/} 
            </div>
        );
    }
};
ProductListHOC = AjaxHOC(ProductListHOC,{url:'https://nodesense.github.io/api/products.json'})
export default ProductListHOC;