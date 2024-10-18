import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import User from './Routes/User';
import Product from "./Routes/Products"
import Purchase from "./Routes/Purchase";
dotenv.config();

const app = express().use(bodyParser.json());

app.use('/User', User);
app.use('/Product', Product);
app.use('/Purchase', Purchase);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
