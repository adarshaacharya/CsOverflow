import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../config/database.config';
import { Posts } from '../../modules/posts/posts.model';

export class Tags extends Model {
  public static readonly tableName: string = 'students';

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
          type: DataTypes.STRING(),
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

Tags.prepareInit(sequelize);

Tags.belongsToMany(Posts, {
  through: 'post_tag',
  as: 'posts',
  foreignKey: 'tagId',
});

Posts.belongsToMany(Tags, {
  through: 'post_tag',
  as: 'tags',
  foreignKey: 'postId',
});
