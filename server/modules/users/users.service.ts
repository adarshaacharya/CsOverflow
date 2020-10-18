import BadRequest from '../../common/exceptions/bad-request';
import { Users } from './users.model';

interface IUsersData {
    name: string;
    email: string;
    password: string;
}

class UsersService {
    public async createOne(userData: IUsersData): Promise<Users> {
        const { name, email, password } = userData;

        if (await this.findOneByEmail(email)) {
            throw new BadRequest('User with provided email already exists');
        }

        const user = new Users({
            name,
            email,
            password,
        });
        return user.save();
    }

    public async findOneByEmail(email: string): Promise<Users | null> {
        const user = await Users.findOne({
            where: { email },
        });
        return user;
    }
}

export const usersService = new UsersService();
