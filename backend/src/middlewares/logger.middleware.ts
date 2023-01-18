import express from 'express';

const { PORT } = process.env;

function loggerMiddleware(request: express.Request, response: express.Response, next: express.NextFunction) {
    console.log(`${request.method} ${request.path}`);
    next();
}

const app = express();

app.use(loggerMiddleware);

app.get('/hello', (request, response) => {
    response.send('Hello world!');
})

app.listen(PORT);