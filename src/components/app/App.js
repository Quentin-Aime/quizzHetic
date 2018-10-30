import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import homeContainer from '../../views/home/HomeContainer'
import CategoryContainer from '../../views/category/CategoryContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Je suis dans mon header
        </header>
        <Router>
          <div>
            <Route exact path="/" component={ homeContainer} />
            <Route path="/categories/:name" component={ CategoryContainer} />
          </div>
        </Router>
        <footer>
          Je suis dans mon footer
        </footer>
      </div>
    );
  }
}

export default App;
