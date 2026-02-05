import express from "express"
import router from "./product.route.js";

const app = express();
const PORT = 3000

app.get("/", (req, res) => {
  res.status(200).json({message: "Hello!"})
})

app.use("/api/product", router) // routes/blogRoutes.js 

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
  })