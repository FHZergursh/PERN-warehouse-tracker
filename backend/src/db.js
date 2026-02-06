import { neon } from '@neondatabase/serverless';
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const {DB_CONN_STRING} = process.env;

export const sql = neon(`${DB_CONN_STRING}`)

export async function initDB() 
{


}