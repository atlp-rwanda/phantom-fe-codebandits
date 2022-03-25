import cors from 'cors';
import express from 'express';
import jsonserver from 'json-server';
import path, { join } from 'path';

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 3001; // Heroku will need the PORT environment variable
app.use(cors());
app.use(express.static(join(__dirname, 'dist')));
app.use(jsonserver.defaults());
app.use(
  'api/routes',
  jsonserver.router(join(__dirname, 'src/database', 'routeDB.json'))
);
app.use(
  'api/buses',
  jsonserver.router(join(__dirname, 'src/database', 'busesDB.json'))
);
app.use(
  '/api',
  jsonserver.router(join(__dirname, 'src/database', 'database.json'))
);
// Always ensure to load the react router to handle the routing
app.use('*', (req, res) => {
  return res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {});
