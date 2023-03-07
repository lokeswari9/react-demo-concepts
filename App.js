import React, { Component} from 'react';
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom';
import './App.css';
import UserList from './app/components/UserList';
import FileNotFound from './app/components/FileNotFound';
import Param from './app/components/Param';
import Ajax from './app/components/Ajax';
import ProductList from './app/components/ProductList';
import Cart from './app/components/Cart';
import ProductListHOC from './app/components/ProductListHOC';
import UserListHOC from './app/components/UserListHOC';
import AddToList from './app/components/AddToList';
import map from './app/components/map';
import PureComponent from './app/components/PureComponent';

class App extends Component{
  render() {
    return (
      <div className="App">
        <BrowserRouter> 
        <div>
            <div>
                <Link to = "/UserList">UserList<br/></Link>
                <Link to = "/fromFun">FromFun<br/></Link>
                <Link to = "/ajax">ajax<br/></Link>
                <Link to = "/cart">Cart<br/></Link>
                <Link to = "/param/11">Param<br/></Link> 
                <Link to = "/productList">ProductlIST<br/></Link>
                <Link to = "/productListHOC">productListHOC<br/></Link> 
                <Link to = "/userListHOC">userListHOC<br/></Link>
                <Link to = "/addToList">addToList<br/></Link>
                <Link to="/map">Map<br/></Link>
                <Link to="/pureComponents">PureComponent<br/></Link>

            </div>
            <Switch>
            <Route path="/" component={Param} exact/>
            <Route path="/fromFun" render={()=><div>Hello lokeswari</div>} />
            <Route path="/userList" component={UserList}/>
            <Route path="/ajax" component={Ajax} />
            <Route path="/param/:id" component={Param}/>
            <Route path="/productList" component={ProductList}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/productListHOC" component={ProductListHOC}/>
            <Route path="/userListHOC" component={UserListHOC}/>
            <Route path="/addToList" component={AddToList}/>
            <Route path="/map" component={map} />
            <Route path="/pureComponents" component={PureComponent} />
            <Route component={FileNotFound} />

            
            </Switch> 
          </div>
      </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
