import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from './store';

// import Routes from './routes';

const App = () => (
  <Provider store={store}>
    {/* <Routes /> */}
    <h1>Hello</h1>
  </Provider>
);

export default App;
