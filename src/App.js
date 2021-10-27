import './App.css';
import './components/NavBar/NavBar.css';
import './components/ItemListContainer/ItemListContainer.css'
import './components/Item/Item.css'
import './components/ItemList/ItemList.css'
import './components/CartWidget/CartWidget.css'
import { ItemCount } from './components/ItemCount/ItemCount';
import { Navbar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ItemListContainer />
      <ItemCount stock={5} initial={0} />
    </div>
  );
}

export default App;