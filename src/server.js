import express from 'express';
import path, { join } from 'path';

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 3000; // Heroku will need the PORT environment variable

app.use(express.static(join(__dirname, 'dist')));

// Always ensure to load the react router to handle the routing
app.use('*', (req, res) => {
  return res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {});
