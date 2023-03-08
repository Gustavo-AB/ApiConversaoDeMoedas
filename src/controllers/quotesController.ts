import { Request, Response } from "express"


const axios = require("axios")
const arr = ['USD', 'BRL', 'BTC', 'EUR']

export class QuotesController {

    public async handle(request:Request, response:Response){
        const { from, to, amount } = request.query        
        const point = `${from}${to}`     

        if(arr.includes(String(from)) && arr.includes(String(to))){

            const { data } = await axios.get(`https://economia.awesomeapi.com.br/last/${from}-${to}`)
            const bid = data[point].bid
            const currency = Number(amount) * bid

            return response.status(200).json(currency)
      
        } else {
           
            return response.status(400).json({ msg:"something is wrong!" })
        }       
        
    }
}