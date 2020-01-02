import { Request , Response} from 'express'
import Character from '../model/Character'
import  '../database'
import Characters from '../model/Character';
class UserController {
    
    async index(req : Request, res : Response) :Promise<Response>{
        const users = await Character.findAll();
        return res.json(users);
    }

    async create(req: Request, res : Response) :Promise <Response>{
        const {name, race, lore} = req.body
        const person = await Character.create({
            name,race,lore
        })

        return res.json(person)
    }
}

export default new UserController()