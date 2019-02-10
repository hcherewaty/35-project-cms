import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import CMS from './components/cms/cms.js';


import createStore from './store/';
const store = createStore();

/**
 *@Function App - returns components and browser router to be rendered through index.html.  Wraps Provider around all components so redux store is available to all.
 *
 * @returns
 */
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CMS />
      </BrowserRouter>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
