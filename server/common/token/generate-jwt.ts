import jwt from 'jsonwebtoken';

const generateToken = (id: number) => {
  const payload = {
    user: {
      id,
    },
  };
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: '30d',
  });
};

export default generateToken;
