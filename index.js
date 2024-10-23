import express from 'express';
const app = express();
const port = 8080;
import route from './routes/routes.js';
import path from 'path';
import connectDB from './database/connectDB.js';
import bodyParser from 'body-parser';

// Database Connection
connectDB();

// Body Parser
app.use(bodyParser.urlencoded({
    extended: false
}));

// Setup For Static Files
app.use(express.static(path.join(process.cwd(), 'public')));

// Setup for EJS Template File
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.use('/', route);

app.listen(port, () => {
    console.log(`Server Up and Running at http://localhost:${port}`);
})