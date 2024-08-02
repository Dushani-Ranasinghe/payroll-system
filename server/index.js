import express from "express";
import cors from 'cors';
import { adminRouter } from "./routes/AdminRoute.js";

const app = express();
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());
app.use('/auth', adminRouter);

app.options('*', cors());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
