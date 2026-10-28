import "dotenv/config";
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

const connectionString = process.env.DATABASE_URL;

if(!connectionString) {
    throw new Error("DATABASE belum dikonfigurasi");
}

export const pool = mysql.createPool(connectionString);

export const db = drizzle({
    client: pool
});