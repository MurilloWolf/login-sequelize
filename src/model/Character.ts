import {Model, DataTypes, Sequelize} from 'sequelize'
import connection from '../database'

class Character extends Model {
   public id! : number
   public name: string
   public race: string
   public lore: string
   public user_id : number
   public photograph_id : number
   private connection : Sequelize

}

Character.init({
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(50),
    allowNull: false,
  },
  race: {
    type: new DataTypes.STRING(50),
    allowNull: false,
  },
  lore: {
    type: new DataTypes.STRING(1000),
    allowNull: false,
  },




  //Isso é uma FOREING KEY para Usuarios
  user_id : {
    type: new DataTypes.INTEGER,
    references : {
        model: 'Users',
        key: 'id'
    }
  },
  //Isso é uma FOREING KEY para Usuarios
  photograph_id : {
    type: new DataTypes.INTEGER,
    references : {
        model: 'Photographs',
        key: 'id'
    }
  }
},{

  sequelize: connection,
  tableName: 'Characters'
})


export default  Character