import React,{PureComponent} from 'react';

class PureComponents extends PureComponent{
    constructor(){
        super();
        this.state={
            age:5
        }
    }
    changeEvent=()=>{
        console.log('age is changed')
        this.setState({age:21});
    }
    render(){
        return(
            <div className="purecomp">
                <div>{this.state.age}</div>
                <button onClick={this.changeEvent}>click</button>
            </div>
        )
    }
}
export default PureComponents;