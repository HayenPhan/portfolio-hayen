import React from 'react';
import '../sass/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './../pages/home/Home';
import DetailPlantacle from '../pages/detail-project/DetailPlantacle';
import DetailBanzai from '../pages/detail-project/DetailBanzai';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/plantacle" component={DetailPlantacle} />
                  <Route path="/banzai" component={DetailBanzai} />
                </Switch>
            </Router>
        );
    }
}

export default App;
