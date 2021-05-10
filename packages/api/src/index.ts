import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(routes);

const port = process.env.API_PORT || 3002;
app.listen(port, () => {
  console.log(`api running on port ${port}`);
});
