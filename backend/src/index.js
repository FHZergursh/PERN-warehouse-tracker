import express from "express"
import router from "./product.route.js";
import dotenv from "dotenv"
import { initDB } from "./db.js";

dotenv.config()

const app = express();
app.use(express.json())

const PORT = process.env.PORT

app.use("/api/product", router) // routes/blogRoutes.js 

//initDB() creates a database if not exists
initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
  })
})
