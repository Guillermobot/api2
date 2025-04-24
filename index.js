import express from 'express';
import cors from 'cors';
import getroutes from './getroutes.js'; // Asegúrate de que la ruta sea correcta

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use("/api", getroutes);

app.listen(port, () => {
  console.log(`HarryPotterAPI corriendo en 0.0.0.0:${port}`);
});