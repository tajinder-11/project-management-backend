import "dotenv/config";
import app from "./app.js";
import express from "express";
import connectDB from "./db/index.js";
import { connect } from "mongoose";

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("server is listening on port", port);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection error", error);
    process.exit(1);
  });
