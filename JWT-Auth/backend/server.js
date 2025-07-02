import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import authRoutes from "./routes/authRoutes.js";  
dotenv.config();

const app = express();
const port = 3000;


app.use(cors());  
app.use(express.json());  


app.use('/', authRoutes);  


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
