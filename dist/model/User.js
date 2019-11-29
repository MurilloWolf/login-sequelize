"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');
var _database = require('../database'); var _database2 = _interopRequireDefault(_database);

class User extends _sequelize.Model {
   
   
    
   
   
   

}

User.init({
  id: {
    type: _sequelize.DataTypes.INTEGER, 
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new _sequelize.DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new _sequelize.DataTypes.STRING(128),
    allowNull: false,
  },
  password:{
    type: new _sequelize.DataTypes.STRING(128),
    allowNull: false,
  },
  auth:{
    type: new _sequelize.DataTypes.NUMBER,
    allowNull: true
  }
},{

  sequelize: _database2.default,
  tableName: 'Users'
})


exports. default =  User