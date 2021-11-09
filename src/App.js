import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './components/NavBar/NavBar.css';
import './components/ItemListContainer/ItemListContainer.css'
import './components/Item/Item.css'
import './components/ItemList/ItemList.css'
import './components/CartWidget/CartWidget.css'
import { Navbar } from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:categoryName">
            <ItemListContainer />
          </Route>
          <Route exact path="/servicios/:servicioId">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;