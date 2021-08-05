import "reflect-metadata";
import {createConnection} from "typeorm";
import express, { Request, Response } from 'express'


const app = express();

app.use(express.json());    // use json middleware
app.use('/users', require('./controllers/UserController'));
app.use('/posts', require('./controllers/PostController'));

createConnection().then(async () => {

    app.listen(5000, () => 
        console.log('Server up at http://localhost:5000')
    );

}).catch(error => console.log(error));
