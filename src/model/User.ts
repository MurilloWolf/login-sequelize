import {Model, DataTypes, Sequelize} from 'sequelize'
import connection from '../database'

class User extends Model {
   public id! : number
   public name! : string
   public email:string 
   public password: string
   public auth : string
   private connection : Sequelize

}

User.init({
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  password:{
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  auth:{
    type: new DataTypes.NUMBER,
    allowNull: true
  }
},{

  sequelize: connection,
  tableName: 'Users'
})


export default  User