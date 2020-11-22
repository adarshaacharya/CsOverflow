import bcrypt from 'bcryptjs';
import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../config/database.config';

export class Users extends Model {
  public static readonly tableName: string = 'users';

  public id: number;
  public name: string;
  public email: string;
  public password: string;
  public avatar: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  public static prepareInit(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.BIGINT,
          autoIncrement: true,
          field: 'id',
          primaryKey: true,
        },
        name: {
          type: new DataTypes.STRING(255),
          allowNull: false,
          field: 'name',
        },
        email: {
          type: new DataTypes.STRING(128),
          unique: true,
          allowNull: false,
          field: 'email',
        },
        password: {
          type: new DataTypes.STRING(255),
          allowNull: false,
          field: 'password',
        },
        avatar: {
          type: new DataTypes.STRING(255),
          allowNull: false,
          field: 'avatar',
        },
      },
      {
        tableName: this.tableName,
        sequelize,
      }
    );
  }
}

Users.prepareInit(sequelize);

Users.beforeCreate(async (user: Users) => {
  if (user.password) {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
  }
});
