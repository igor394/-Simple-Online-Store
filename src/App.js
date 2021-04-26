import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import ProductList from './component/ProductList';
import ProductCard from './component/ProductCard/ProductCard';
import UserCart from './component/Cart/UserCart';
import Footer from './component/Footer';

function App() {
    return (
        <>
            <div className='main'>
                <Router>
                    <Header/>
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/list' component={ProductList}/>
                            <Route path='/card' component={ProductCard}/>
                            <Route path='/cart' component={UserCart}/>
                        </Switch>
                    </div>
                </Router>
            </div>
            <Footer/>
        </>
    );
}

export default App;