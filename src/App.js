import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import RecipeGrid from './components/pages/RecipeGrid';
import Recipe from './components/recipes/Recipe';
import Footer from './components/layout/Footer';

import { RecipeProvider } from './Context';
import './App.css';

const App = () => {

    return (
      <RecipeProvider>
        <Router>
          <div className="App">
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/recipegrid' component={RecipeGrid} />
                <Route exact path='/recipe/:id' component={Recipe} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </RecipeProvider>
    );
}

export default App;
