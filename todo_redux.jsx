import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Root />, document.getElementById('root'));
});

const Root = () => {
  return (
    <div className="content-container">
      <h1>Todos App</h1>
    </div>
  );
};
