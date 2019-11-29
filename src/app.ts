import express from 'express'
import cors from 'cors'
import routes from './routes'
import './database'
class App {
    //adicionando tipos 
    //const const_name : type
    public express : express.Application

    public constructor(){
        this.express = express()

        this.middlewares()
        this.routes()
    }

    //o retorn dessa função é vazio 
    private middlewares() : void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {
        //conecção com banco de dados
      
    }

    private routes():void{
      this.express.use(routes)
    }

}

//exportando apenas a propriedade publica de App
export default new App().express