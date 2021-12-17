import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
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
            <div>
              <Switch>
                <Route exact path='/' component={Home} />
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
