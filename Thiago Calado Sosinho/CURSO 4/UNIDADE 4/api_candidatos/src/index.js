import express from "express";
import helmet from 'helmet'
import AppRouter from './router/AppRouter.js';
import LogMiddleware from "./middlewares/LogMiddleware.js";
import ErrorHandler from "./middlewares/ErrorHandler.js";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(LogMiddleware);

app.use('/', AppRouter);
app.use(ErrorHandler);
app.listen(process.env.PORT, () =>{
	console.log("Servidor escutando na porta "+process.env.PORT);
})