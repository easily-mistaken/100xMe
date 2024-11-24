import connectDB from "./db";
import { DB_NAME } from "./config/constants";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.port || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed !!!");
  });

// (async () => {
//   try {
//     mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR", error);
//     throw error;
//   }
// })();
