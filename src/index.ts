import * as express from 'express';
import { Express, Request, Response } from 'express';
import { createServer, Server } from 'http';
import * as bodyParser from 'body-parser';


const app: Express = express();
const server: Server = createServer(app);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

server.listen(process.env.PORT || 3000, () => {
    console.log('Server is started!');
});
server.on('error', (error: Error) => {
    console.error(error);
});