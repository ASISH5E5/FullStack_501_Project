'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sports.hasMany(models.Players, { foreignKey: 'id' });
      
    }
    static addsport({ sname, place, date}) {
      return this.create({ sname, place,date});
    }

    
    static getAllSports() {
      return this.findAll(); // Fix method call
    }

    static delete(id) {
      return this.destroy({
        where: { id: id },
        
      });
    }
    
    
  }
  Sports.init({
    sname: DataTypes.STRING,
    place: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    
  }, {
    sequelize,
    modelName: 'Sports',
  });
  return Sports;
};