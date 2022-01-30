import './App.css';
import NavBar from './components/NavBar/index';
import ItemListContainer from './containers/ItemListContainer';
import CategorySelector from './containers/CategorySelector';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {CartContextProvider} from "./context/CartContext"
import Cart from "./components/Cart"
import Form from './components/Form';
import { About } from './components/About';
import { Home } from './components/Home';

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
              <Home />
            </div>
          </Route>
          <Route path="/products">
          
            <div className="containerAll">
              <div className='titleProds'>
                <h1 className="myProducts"> Products</h1>
              </div>
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
              <About />
            </div>
          </Route>
          <Route path="/checkout">
            <div className='checkout'>
              <Form />
            </div>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
