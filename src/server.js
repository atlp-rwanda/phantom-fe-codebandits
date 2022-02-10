import express from "express";
import path, { join } from "path";
const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 3000; // Heroku will need the PORT environment variable

app.use(express.static(join(__dirname, "dist")));

app.listen(port, () => console.log(`App is live on port ${port}!`));
