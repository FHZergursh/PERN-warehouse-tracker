import express from 'express'

export const getAllProducts = async (req, res) => {
  const {name, price, stock} = req.body

  if (!name || !price || !stock) {
    return res.status(400).json({success: false, message: "Please provide all values"})
  }

  const newProduct = await sql ``; //write out the sql here later





    res.status(200).json({message: "Hello!"})
}

export const getProduct = (req, res) => {
  res.status(200).json({message: "Hello!"})
}

export const createProduct = (req, res) => {
  res.status(200).json({message: "Hello!"})
}

export const updateProduct = (req, res) => {
  res.status(200).json({message: "Hello!"})
}

export const deleteProduct = (req, res) => {
  res.status(200).json({message: "Hello!"})
}


