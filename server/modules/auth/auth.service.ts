import { Users } from '../../modules/users/users.model';
import * as bcrypt from 'bcryptjs';
import generateToken from '../../common/token/generate-jwt';
import { Unauthorized } from '../../common/exceptions';

interface ILoginData {
  email: string;
  password: string;
}

class AuthServices {
  async loadUser(id: number) {
    const user = await Users.findOne({
      where: { id },
      attributes: {
        exclude: ['password'],
      },
    });

    return user;
  }

  async login(loginData: ILoginData) {
    const { email, password } = loginData;
    const user = await Users.findOne({
      where: { email },
    });

    if (!user) throw new Unauthorized("User desn't exists");

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) throw new Unauthorized('Invalid email or password');

    const token: string = generateToken(user.id);
    return token;
  }
}

export const authServices = new AuthServices();
