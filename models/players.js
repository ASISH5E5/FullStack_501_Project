'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Players extends Model {
    static associate(models) {
      Players.belongsTo(models.Sports, { foreignKey: 'id', as: 'sport' });
    }

    static addplayer({ name, role,sportId, image}) {
      return this.create({ name, role,sportId, image});
    }

    static updateplayer({ id, name, role }) {
      return this.update(
        { name, role },
        {
          where: {
            id: id,
          },
        }
      );
    }
    
    static getAllPlayers() {
      return this.findAll();
    }

    static delete(id) {
      return this.destroy({
        where: { id: id },
      });
    }
  }

  Players.init(
    {
      name: DataTypes.STRING,
      role: DataTypes.STRING,
      image: DataTypes.STRING,
      sportId:DataTypes.INTEGER,

    },
    {
      sequelize,
      modelName: 'Players',
    }
  );

  return Players;
};
