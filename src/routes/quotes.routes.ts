import { Router }  from "express"
import { QuotesController } from "../controllers/quotesController"


export const routes = Router()
const quotesController = new QuotesController()


routes.get("/", quotesController.handle)