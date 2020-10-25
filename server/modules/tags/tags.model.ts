import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../config/database.config';
import { Posts } from '../../modules/posts/posts.model';

export class Tags extends Model {
  public static readonly tableName: string = 'tags';

  public id: number;
  public tagname: string;

  public static prepareInit(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        tagname: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        tableName: this.tableName,
      }
    );
  }
}

Tags.prepareInit(sequelize);

Tags.belongsToMany(Posts, {
  through: 'posttag',
  foreignKey: 'tagId',
  otherKey: 'postId',
  as: 'posts',
});

Posts.belongsToMany(Tags, {
  through: 'posttag',
  foreignKey: 'postId',
  otherKey: 'tagId',
  as: 'tags',
});
