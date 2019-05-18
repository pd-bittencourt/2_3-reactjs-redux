import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from './store';

const App = () => (
  <Provider store={store}>
    <h1>Hello new</h1>
  </Provider>
);

export default App;
