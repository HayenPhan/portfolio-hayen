import React from 'react';
import '../sass/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './../pages/home/Home';
import DetailPlantacle from '../pages/detail-project/DetailPlantacle';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/plantacle" component={DetailPlantacle} />
                </Switch>
            </Router>
        );
    }
}

export default App;
