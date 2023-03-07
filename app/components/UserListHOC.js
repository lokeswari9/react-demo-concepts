import React,{Component} from 'react';
import User from './User';
import AjaxHOC from './AjaxHOC';

class UserListHOC extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <p>Length of products {this.props.data.length}</p>
                <User user={this.props.data}/>
            </div>
        );
    }
};
UserListHOC = AjaxHOC(UserListHOC,{url:'https://reqres.in/api/users',isUser: true})
export default UserListHOC;