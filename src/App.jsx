//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/index';
import ItemListContainer from './containers/ItemListContainer'
import CategorySelector from './containers/CategorySelector'
import ItemDetailContainer from './containers/ItemDetailContainer'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {
  return (
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
                <Route exact path="/products/:catId"> 
                  <ItemListContainer />
                </Route>
                <Route exact path="/product/:itemId"> 
                  <ItemDetailContainer />
                </Route>
              </Switch>
            </div>
          </div>
        </Route>

        <Route path="/about">
          <div className='about'>
            <h1>ABOUT</h1>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
