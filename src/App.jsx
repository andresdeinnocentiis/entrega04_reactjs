//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/index';
import ItemListContainer from './containers/ItemListContainer';
import CategorySelector from './containers/CategorySelector';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {CartContextProvider} from "./context/CartContext"
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <div className='home'>
              <h1>HOME</h1>
            </div>
          </Route>
          <Route path="/products">
            <div className="containerAll">
              <div className="containerSelector">
                <h3 className="filterTitle">Filter by category:</h3>
                <CategorySelector />
              </div> 
              <div className='container'> 
                <Switch>
                  <Route exact path="/products">
                    <ItemListContainer />
                  </Route>
                  <Route path="/products/:catId"> 
                    <ItemListContainer />
                  </Route>
                    
                </Switch>
              </div>
            </div>
          </Route>
          <Route exact path="/product/:itemId"> 
            <ItemDetailContainer />
          </Route> 
          <Route exact path="/cart"> 
            <Cart />
          </Route> 
          <Route path="/about">
            <div className='about'>
              <h1>ABOUT</h1>
            </div>
          </Route>
          <Route path="/*">
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
