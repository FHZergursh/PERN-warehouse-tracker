import express from "express"
import { getAllProducts } from "./product.controller.js"

const router = express.Router()

router.get("/", getAllProducts)


export default router