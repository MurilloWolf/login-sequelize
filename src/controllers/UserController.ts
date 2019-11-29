import { Request , Response} from 'express'
import User from '../model/User'
import  '../database'
class UserController {

    /* Não foi possivel identificar o tipo automaticamente, entao foi precisso
     informar qual o tipo das variaveis Req e Res, e por fim informar qual o 
     tipo de dados esperados no retorn dessa função
     
     Não apenas que o retorno é uma promisse , mas qual tipo de dado dentro da 
     promisse*/
    
    async index(req : Request, res : Response) :Promise<Response>{
        const users = await User.findAll();
        return res.json(users);
}
}

export default new UserController()