import express from "express";
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import initDB from './backend/config/db.js'
import userRoutes from './backend/routes/userRoutes.js';
import categoryRoutes from './backend/routes/categoryRoutes.js';
import productRoutes from './backend/routes/productRoutes.js';

const app = express();
// CORS
app.use(cors());
// LOG EVRY REQ
app.use(morgan('dev'));

app.use(express.json());
dotenv.config();

// It is going to connect your backend application to a mongodb database
initDB()

app.get("/api", (req, res) => (
    res.send("hello from node server updated")
));

app.use("/api/users/",userRoutes);
app.use("/api/category/",categoryRoutes);
app.use("/api/product/" , productRoutes);

app.use((err, req, res, next ) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV = 'production' ? null : err.stack,
    })
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

