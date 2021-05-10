import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(routes);

const port = process.env.BFF_PORT || 3001;
app.listen(port, () => {
  console.log(`bff running on port ${port}`);
});
