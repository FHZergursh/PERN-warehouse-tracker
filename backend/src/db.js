import { neon } from '@neondatabase/serverless';
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const {DB_CONN_STRING} = process.env;

export const sql = neon(`${DB_CONN_STRING}`)

export async function initDB() 
{
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS productTable (
      productId SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      stock INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

    console.log("Database initialized successfully!")

  } catch (error) {
    console.log("Error initDB", error)
  }
}
