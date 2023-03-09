import express from 'express';
import * as bodyParser from 'body-parser';

const { PORT } = process.env;

const app = express();

app.use(bodyParser.json());

app.post('/', (request, response) => {
    response.send(request.body);
});

app.listen(parseInt(PORT as string, 10) as number);