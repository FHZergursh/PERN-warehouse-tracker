import express from 'express'
import { sql } from './db.js'

export const getAllProducts = async (req, res) => {
  try {
    const products = await sql `SELECT * FROM producttable
    ORDER BY created_at DESC`
    res.status(200).json({success: true, data: products})

  } catch (error) {
    console.log("Error in get all products, ", error)
    res.status(500).json({success: false, message: "Internal server error"})
  }
}

export const getProduct = async (req, res) => {

  try {
    const {id} = req.params 
    const product = await sql `SELECT * FROM producttable
    WHERE productid = ${id}`
    return res.status(200).json({success: true, data: product})
  }
  catch (error) {
    console.log("Error in get product, ", error)
    res.status(404).json({success: false, message: "Internal server error"})
  }
}

export const createProduct = async (req, res) => {
  try {
    const {name, price, stock} = req.body

    if (!name || !price || !stock) {
      res.status(404).json({success: false, message: "Please enter all value"})
    }
    
    const product = await sql `INSERT INTO producttable(name, price, stock)
    VALUES (${name}, ${price}, ${stock})`

    res.status(201).json({success: true, data:product[0]})
  }
  catch (error) {
    console.log("Error in create product, ", error)
    res.status(404).json({success: false, message: "Internal server error"})
  }
}

export const updateProduct = async (req, res) => {
  try {
    const {id} = req.params 
    const {name, price, stock} = req.body

    if (!name || !price || !stock) {
      res.status(404).json({success: false, message: "Please enter all value"})
    }

    const product = await sql `UPDATE producttable
    SET name = ${name}, price = ${price}, stock = ${stock}
    WHERE id = ${id}`

    res.status(201).json({success: true, data:product[0]})

  } catch (error) {
    console.log("Error in update product", error) 
    res.status(404).json({success: false, message: "Internal server error"})
  }
}

export const deleteProduct =  async (req, res) => {
  try {
    const {id} = req.params


    const product = await sql `DELETE FROM producttable 
    WHERE id = ${id}`

    res.status(201).json({success: true, data:product[0]})
  } catch (error) {
    console.log("Error in delete product, ", error)
    res.status(404).json({success: false, message: "Internal server error"})
  }
}


