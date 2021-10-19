import './App.css';
import { Navbar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import './components/NavBar/NavBar.css';
import './components/ItemListContainer/ItemListContainer.css'
import './components/CartWidget/CartWidget.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ItemListContainer title= "App en construccion"/>
    </div>
  );
}

export default App;