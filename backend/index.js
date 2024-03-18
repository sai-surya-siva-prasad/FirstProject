import express from "express";
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import bookRoute from "./routes/bookRoute.js";
import cors from 'cors';

const app = express();
app.use(express.json());
 app.use(cors());
app.get('/', (req, res) => {
  res.send("Welcome to the MERN stack tutorial");
});

app.use('/books', bookRoute);

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("App is connected to the database");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if MongoDB connection fails
  });
