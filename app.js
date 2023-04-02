import express from "express";
import dotenv from 'dotenv';
import initDB from './backend/config/db.js'
import userRoutes from './backend/routes/userRoutes.js';

const app = express();
app.use(express.json());
dotenv.config();

// It is going to connect your backend application to a mongodb database
initDB()

app.get("/api", (req, res) => (
    res.send("hello from node server updated")
));

app.use("/api/users/",userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

