const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('fec_somebirds_shoeinventory', 'student', 'passw0rd', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

// sequelize.authenticate()
// .then(() => {
//   console.log('Connection has been established successfully.');
// })
// .catch((error) => {
//   console.error('Unable to connect to the database:', error);
// });

const Shoe = sequelize.define('shoe', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { timestamps: false });

const Color = sequelize.define('color', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  shoe_color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sole_color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  shoe_hex: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sole_hex: {
    type: DataTypes.STRING,
    allowNull: false
  },
  limited: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
}, { timestamps: false });

const Size = sequelize.define('size', {
  size: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, { timestamps: false });

const Quantity = sequelize.define('quantity', {
  shoe_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Shoe,
      key: 'id'
    }
  },
  color_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Color,
      key: 'id'
    }
  },
  size_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Size,
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  }
}, { timestamps: false });

const Shoecolor = sequelize.define('shoecolor', {
  shoe_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Shoe,
      key: 'id'
    }
  },
  color_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Color,
      key: 'id'
    }
  }
}, { timestamps: false });

const Shoesize = sequelize.define('shoesize', {
  shoe_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Shoe,
      key: 'id'
    }
  },
  size_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Size,
      key: 'id'
    }
  }
}, { timestamps: false });

module.exports = {
  Shoe: Shoe,
  Color: Color,
  Size: Size,
  Quantity: Quantity,
  Shoecolor: Shoecolor,
  Shoesize: Shoesize
};