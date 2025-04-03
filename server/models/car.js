module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
      make: {
        type: DataTypes.STRING,
        allowNull: false
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      mileage: {
        type: DataTypes.INTEGER
      },
      fuelType: {
        type: DataTypes.ENUM('Gasolina', 'Diesel', 'Elétrico', 'Híbrido'),
        allowNull: false
      },
      transmission: {
        type: DataTypes.ENUM('Automática', 'Manual'),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      },
      imageUrl: {
        type: DataTypes.STRING
      }
    }, {
      paranoid: true, // Soft delete
      timestamps: true
    });
  
    return Car;
  };