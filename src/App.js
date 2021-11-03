import './App.css';
import './components/NavBar/NavBar.css';
import './components/ItemListContainer/ItemListContainer.css'
import './components/Item/Item.css'
import './components/ItemList/ItemList.css'
import './components/CartWidget/CartWidget.css'
import { Navbar } from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ItemDetailContainer />
    </div>
  );
}

export default App;