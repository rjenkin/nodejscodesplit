import express from 'express';
const port = 3000;
const app = express();

app.get('*', (req: express.Request, res: express.Response) => {
    res.send('Working');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
