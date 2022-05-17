import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemContainer from './components/ItemContainer/ItemContainer.js'

function App() {
  return (
    <>
      <NavBar />
      <ItemContainer 
        titulo= 'Lista de productos'
      />
    </>
  );
}

export default App;
