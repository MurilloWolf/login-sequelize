import {Model, DataTypes, Sequelize} from 'sequelize'
import connection from '../database'

class Photograph extends Model {
   public id! : number
   public thumbnail! : string
   public character_id : number
   private connection : Sequelize

}

Photograph.init({
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true,
    primaryKey: true,
  },
  thumbnail: {
    type: new DataTypes.STRING(256),
    allowNull: false,
  },
  //Isso é uma FOREING KEY para Characters
  character_id : {
    type: new DataTypes.INTEGER,
    references : {
        model: 'Characters',
        key: 'id'
    }
  }
},{

  sequelize: connection,
  tableName: 'Photographs'
})


export default  Photograph