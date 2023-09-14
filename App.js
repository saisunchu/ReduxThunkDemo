import React from 'react';
import store from './src/reducers';
import {Provider} from 'react-redux';
import NameDemo from './src/screens/NameDemo';

const App = () => {
  return (
    <Provider store={store}>
      <NameDemo />
    </Provider>
  );
};

export default App;
