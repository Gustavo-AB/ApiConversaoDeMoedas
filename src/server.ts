import express from "express"
import { routes } from "./routes/quotes.routes"


const server = express()

server.use(express.json())
server.use(routes)


server.listen(3333, ()=>{
    console.log("Server is running!")
})