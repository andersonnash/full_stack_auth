import express from "express";
import cors from "cors";
import morgan from "morgan";
import db from "./db/connection.js";

const app = express();
const PORT = process.env.PORT || 4567;

//gives access to req.body
app.use(express.json());
app.use(cors());
//change after deployment - tiny
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("<h1>Hello, World!</h1>"));

db.on("connected", () => {
  app.listen(PORT, console.log(`conected to port: ${PORT}`));
});
