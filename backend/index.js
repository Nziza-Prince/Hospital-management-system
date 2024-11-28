const express = require("express")
const app = express()
const port = 3001 || process.env.PORT

const login = require("./auth/login")
const register = require("./auth/register")
const cors = require("cors")
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true
  }));
app.use(express.json())
app.use("/login",login)
app.use("/register",register)
app.listen(port,console.log(`server at http://localhost:${port}`))