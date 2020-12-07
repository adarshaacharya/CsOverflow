import { Posts } from '../../modules/posts/posts.model';
import { Users } from '../../modules/users/users.model';
import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../config/database.config';

export class Likes extends Model {
  public static readonly tableName: string = 'likes';

  public id: number;
  public postId: number;
  public userId: number;
  public createdAt: Date;
  public updatedAt: Date;

  public static prepareInit(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },

        postId: {
          type: DataTypes.INTEGER(),
          allowNull: true,
        },
        userId: {
          type: DataTypes.INTEGER(),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: this.tableName,
      }
    );
  }
}

Likes.prepareInit(sequelize);

// post
Likes.belongsTo(Posts, {
  foreignKey: 'postId',
  as: 'post',
});

// Posts.hasMany(Likes, {
//   foreignKey: 'postId',
//   as: 'likes',
//   onDelete: 'cascade',
// });

// user
Likes.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user',
});

// Users.hasMany(Likes, {
//   foreignKey: 'userId',
//   as: 'likes',
//   onDelete: 'cascade',
// });
