import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({ store }) => {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
};

export default Root;
