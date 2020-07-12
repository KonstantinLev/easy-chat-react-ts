import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Chat} from './components/Chat/Chat';
import {Join} from './components/Join/Join';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Join}/>
            <Route path="/chat" component={Chat}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
