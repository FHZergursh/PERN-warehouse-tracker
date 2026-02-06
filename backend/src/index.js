import express from "express"
import router from "./product.route.js";
import dotenv from "dotenv"
import { neon } from '@neondatabase/serverless';
import { sql } from "./db.js";

dotenv.config()

const app = express();
const PORT = 3000


app.get("/", (req, res) => {
  res.status(200).json({message: "Hello!"})
})

app.use("/api/product", router) // routes/blogRoutes.js 


async function getPgVersion() {
  const result = await sql`SELECT version()`;
  console.log(result[0]);
}

getPgVersion()



app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
  })