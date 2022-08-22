import 'dotenv/config'
import express from "express";
import { userRouter } from "./routes/userRoutes.js";
import { tableRouter } from './routes/tableRoutes.js';
import { guestRouter } from './routes/guestRoutes.js';
import connect from "./db/connect.js";

import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true,
  methods: 'POST,GET,PUT,OPTIONS,DELETE'
}));

app.use('/users', userRouter);
app.use('/tables', tableRouter);
app.use('/guest', guestRouter);

// Conecta ao mongoDB.
connect();
app.listen(3000, () => console.log(`Server rodando em: http://localhost:3000`));