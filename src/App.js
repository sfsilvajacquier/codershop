import React from 'react';
//import { getFirestore } from './firebase/index'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import CartContainer from './containers/CartContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContext from './context/cartContext'
import './App.css';

function App() {
  return (
    <div>
      <CartContext>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path='/' render={() => <Home greeting='Bienvenidos a la tienda'/>} />
            <Route exact path='/about' render={() => <About/>} />
            <Route path='/cart' render={() => <CartContainer />} />
            <Route path='/item/:id' render={() => <ItemDetailContainer />} />
          </Switch>
        </BrowserRouter>  
      </CartContext> 
    </div> 
  );
}

export default App;
