import {Model, DataTypes, Sequelize, UUID, UUIDV4} from 'sequelize'
import connection from '../database'

class User extends Model {
   public uuid! : string
   public name! : string
   public email:string 
   public password: string

   private connection : Sequelize

}

User.init({
  uuid: {
    type: DataTypes.UUIDV4, 
    defaultValue :  UUIDV4,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(100),
    allowNull: false,
  },
  password:{
    type: new DataTypes.STRING(50),
    allowNull: false,
  },
 
},{

  sequelize: connection,
  tableName: 'Users'
})


export default  User