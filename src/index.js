import React from 'react';
require('file-loader?name=[name].[ext]!./index.html');
import ReactDOM from 'react-dom';
import { Root } from './Root';

const root = document.getElementById('root');

ReactDOM.hydrate(<React.StrictMode>
  <Root />
</React.StrictMode>, root);