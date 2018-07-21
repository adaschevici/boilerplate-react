import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './components/Root';

import 'font-awesome/css/font-awesome.css';
import 'react-flexbox-grid/dist/react-flexbox-grid.css';

const target = document.querySelector('#root');

ReactDOM.render(
  <RootComponent />,
  target
);
