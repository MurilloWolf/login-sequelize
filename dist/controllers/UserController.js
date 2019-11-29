"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});
var _User = require('../model/User'); var _User2 = _interopRequireDefault(_User);
require('../database');
class UserController {

    /* Não foi possivel identificar o tipo automaticamente, entao foi precisso
     informar qual o tipo das variaveis Req e Res, e por fim informar qual o 
     tipo de dados esperados no retorn dessa função
     
     Não apenas que o retorno é uma promisse , mas qual tipo de dado dentro da 
     promisse*/
    
    async index(req , res ) {
        const users = await _User2.default.findAll();
        return res.json(users);
}
}

exports. default = new UserController()