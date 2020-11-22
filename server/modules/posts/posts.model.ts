import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../config/database.config';
import { Users } from '../users/users.model';

export class Posts extends Model {
  public static readonly tableName: string = 'posts';

  public id: number;
  public title: string;
  public body: string;
  public userId: number;
  public createdAt: Date;
  public updatedAt: Date;
  setTags: any;

  public static prepareInit(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.TEXT(),
          allowNull: false,
        },
        body: {
          type: DataTypes.TEXT(),
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER(),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: this.tableName,
      }
    );
  }
}

Posts.prepareInit(sequelize);

Posts.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user',
});

Users.hasMany(Posts, {
  foreignKey: 'userId',
  as: 'posts',
  onDelete: 'cascade',
});
