import { Posts } from '../../modules/posts/posts.model';
import { Users } from '../../modules/users/users.model';
import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../config/database.config';

export class Answers extends Model {
  public static readonly tableName: string = 'answers';

  public id: number;
  public body: string;
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
        body: {
          type: DataTypes.STRING(),
          allowNull: false,
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

Answers.prepareInit(sequelize);

// post
Answers.belongsTo(Posts, {
  foreignKey: 'postId',
  as: 'post',
});

Posts.hasMany(Answers, {
  foreignKey: 'postId',
  as: 'answers',
  onDelete: 'cascade',
});

// user
Answers.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'user',
});

Users.hasMany(Answers, {
  foreignKey: 'userId',
  as: 'answers',
  onDelete: 'cascade',
});
