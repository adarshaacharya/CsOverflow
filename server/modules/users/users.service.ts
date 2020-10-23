import { Users } from './users.model';
import generateToken from '../../common/token/generate-jwt';
import { NotFound, BadRequest } from '../../common/exceptions';

interface IUsersData {
  name: string;
  email: string;
  password: string;
}

class UsersService {
  public async findAll(): Promise<Users[]> {
    const users = await Users.findAll({
      attributes: { exclude: ['password'] },
      order: [['id', 'DESC']],
    });
    return users;
  }

  public async findOneOrThrow(id: number) {
    const user = await this.findOneById(id);

    if (!user) throw new NotFound("User with given id doesn't exists");
    return user;
  }

  public async createOne(userData: IUsersData) {
    const { name, email, password } = userData;

    if (await this.findOneByEmail(email)) {
      throw new BadRequest('User with provided email already exists');
    }

    const user = new Users({
      name,
      email,
      password,
    });
    await user.save();

    const token = generateToken(user.id);
    return token;
  }

  public async findOneById(id: number): Promise<Users | null> {
    const user = await Users.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });

    return user;
  }

  public async findOneByEmail(email: string): Promise<Users | null> {
    const user = await Users.findOne({
      where: { email },
    });
    return user;
  }
}

export const usersService = new UsersService();
