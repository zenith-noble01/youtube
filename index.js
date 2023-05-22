import express from "express"
import cors from "cors"
import morgan from "morgan"
import * as dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import userRoutes from "./routes/userRoute.js"


//initialize app

const app = express()
dotenv.config()

connectDB()

//midlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

//end-points
app.use("/api/user", userRoutes)

app.listen(8000, () => {
    console.log("server is running on 8000");
})