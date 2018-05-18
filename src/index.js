import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Postindex from  './components/posts_index'
const createStoreWithMiddleware = applyMiddleware()(createStore);
import promise from 'redux-promise'
import Contactdetails from './components/conatctdetails';
import Postpage from './components/postspage'
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
        <Route exact path="/" component={Postindex}/>
        <Route exact path="/details" component={Contactdetails}/>
        <Route exact path="/posts" component={Postpage}/>
        
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
