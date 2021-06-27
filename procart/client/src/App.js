import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./modules/layout/navbar/Navbar"
import Mobiles from "./modules/products/components/Mobiles";
import Watches from "./modules/products/components/Watches";
import Laptops from "./modules/products/components/Laptops";
import Upload from "./modules/products/components/Upload";
import Login from "./modules/user/components/Login";
import Signup from "./modules/user/components/Signup";
import Profile from "./modules/user/components/Profile";
import Cart from "./modules/order/Cart";
import {Provider} from "react-redux";
import store from "./redux/Store";
let App =()=>{
  return(<>
  <Provider store={store}>
  <Router>
  <Navbar />
  <Switch>
    <Route exact path="/mobiles" component={Mobiles} />
    <Route exact path="/watches" component={Watches} />
    <Route exact path="/laptops" component={Laptops} />
    <Route exact path="/upload" component={Upload} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/profile" component={Profile} />
    
  </Switch>
  </Router>
  </Provider>
  </>);
}
export default App;