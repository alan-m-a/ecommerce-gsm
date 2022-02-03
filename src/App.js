import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './components/NavBar/NavBar.css';
import './components/ItemListContainer/ItemListContainer.css';
import './components/Item/Item.css';
import './components/ItemList/ItemList.css';
import './components/CartWidget/CartWidget.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartContextProvider from './context/CartContext';




function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/category/:servicioId">
              <ItemListContainer />
            </Route>
            <Route path="/servicios/:servicioId">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );

}

export default App;