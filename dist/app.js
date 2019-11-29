"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
require('./database');
class App {
    //adicionando tipos 
    //const const_name : type
    

     constructor(){
        this.express = _express2.default.call(void 0, )

        this.middlewares()
        this.routes()
    }

    //o retorn dessa função é vazio 
     middlewares()  {
        this.express.use(_express2.default.json())
        this.express.use(_cors2.default.call(void 0, ))
    }

     database() {
        //conecção com banco de dados
      
    }

     routes(){
      this.express.use(_routes2.default)
    }

}

//exportando apenas a propriedade publica de App
exports. default = new App().express