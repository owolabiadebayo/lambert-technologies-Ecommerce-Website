import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './components/StateProvider/StateProvider';
import { auth } from './firebase';


import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';


import Electronic from './components/AllPhone/Lambert/Electronicgadget/Electronic';
import Iphonestore from './components/AllPhone/Lambert/Iphone/Iphonestore';
import Phones from './components/AllPhone/Lambert/Phones';
import Paystack1 from './components/Checkout/Paystack/paystack';



function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);

  console.log('User is >>>', user);

  return (
    <Router>
      <div className="app">
        <Switch>
           <Route path="/Lambert/Phone">
            <Header />
            <Iphonestore/>
          </Route>
          <Route path = "/Lambert/payment">
            <Paystack1/>
          </Route>
          <Route path="/Lambert/Gadget">
            <Header />
            <Electronic/>
          </Route>   
          <Route path="/Lambert/allphones">
            <Header />
            <Phones/>
          </Route>     
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout /> 
          </Route>
          <Route exact path="/" >
            <Header />
            <Home />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
