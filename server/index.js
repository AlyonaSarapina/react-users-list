import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import { Root } from '../src/Root';

const PORT = process.env.PORT || 3006;
const app = express();

if (typeof document !== 'undefined') {
  app.get('/', (req, res) => {
    const root = document.getElementById('root');
    const app = (
      ReactDOM.hydrate(<React.StrictMode>
        <Root />
      </React.StrictMode>, root)
    );
    const appToString = ReactDOMServer.renderToString(app);

    const indexFile = path.resolve('./build/index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }

      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${appToString}</div>`)
      );
    });
  });
}

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});