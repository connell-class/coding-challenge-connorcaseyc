import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './Store';
import { history } from './utilities/history';
import { Landing } from './components/Landing';
import { GLDisplay } from './components/GroceryList/GLDisplay';
import ChooseGL from './components/GroceryList/ChooseGLContainer';
import SubmitItem from './components/GroceryItem/SubmitItemContainer';
import GIDisplay from './components/GroceryItem/GIDisplay';

const App: React.FC = () => {

  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <div>

            <Switch>
              <Route path='/items' component={GIDisplay}/>
              <Route path='/chooselist' component={ChooseGL}/>
              <Route path='/glists' component={GLDisplay}/>
              <Route path='/additem' component={SubmitItem}/>
              <Route path='/' component={Landing}/>
            </Switch>

          </div>
        </Router>
      </Provider>
    </div>
  )

}

export default App;
