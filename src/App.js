import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/products';
import cart from './pages/cart';
import Navigation from './components/Navigation';



const App = () => {
    return(
       <>

       <Router>
          <Navigation/>
           <Switch>
               <Route path="/" component={Home} exact></Route>
               {/*<Route path="/about" component={About}></Route>*/}
               <Route path="/products" component={Products}></Route>
               <Route path="/cart" component={cart}></Route>


           </Switch>
       </Router>
       </>

    )
}

export default App;