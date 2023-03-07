import React,{Component} from 'react';
import axios from 'axios';
import User from './User';

class Ajax extends Component{
    constructor(){
        super();
        this.state = {
            userList: []
        }
    }

    componentDidMount(){
        this.getData().then(response => {
            this.setState({userList: response.data.data})
        });    
    }
    getData = () => {
        return new Promise((resolve, reject) => {
        axios.get('https://reqres.in/api/users ').then(function (response){
            resolve(response)
        }).catch(function (error){
                reject(error)
        });
     });
    }

    render(){
        return(
            
            <div>
                
                <User user={this.state.userList}/>
            </div>
            
        );
    }
}
export default Ajax;