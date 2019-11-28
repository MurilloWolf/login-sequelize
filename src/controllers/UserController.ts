import { Request , Response} from 'express'
class UserController {

    /* Não foi possivel identificar o tipo automaticamente, entao foi precisso
     informar qual o tipo das variaveis Req e Res, e por fim informar qual o 
     tipo de dados esperados no retorn dessa função
     
     Não apenas que o retorno é uma promisse , mas qual tipo de dado dentro da 
     promisse*/
    public async index(req : Request, res : Response):Promise<Response>{
       return res.json()
    }
}

export default new UserController()