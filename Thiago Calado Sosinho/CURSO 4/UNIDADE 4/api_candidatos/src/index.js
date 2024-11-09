import express from "express";

import AppRouter from './router/AppRouter.js';
import LogMiddleware from "./middlewares/LogMiddleware.js";

const app = express();

app.use(express.json());
app.use(LogMiddleware);

app.use('/', AppRouter);

app.listen(3000, () =>{
	console.log("Servidor escutando na porta 3000");
})