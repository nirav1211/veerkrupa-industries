import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {
            routes.map((prop, key) => {
              return <prop.type exact path={prop.path} key={key} component={prop.component} />;
            })
          }
          {/* <Route exact path="/" component={Home} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
