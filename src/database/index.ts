import {Sequelize , BuildOptions} from "sequelize";
import DBconfig from '../config/database'

const connection = new Sequelize(DBconfig)
export default connection