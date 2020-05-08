import React from 'react';
import '../sass/App.scss';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './../pages/home/Home';
import DetailPlantacle from '../pages/detail-project/DetailPlantacle';
import DetailBanzai from '../pages/detail-project/DetailBanzai';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/plantacle" component={DetailPlantacle} />
                  <Route path="/banzai" component={DetailBanzai} />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
