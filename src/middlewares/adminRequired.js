import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Admin Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const admin = await Admin.findOne({
      where: {
        id,
        email,
      },
    });

    if (!admin) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.adminId = id;
    req.adminEmail = email;

    return next();
  } catch (err) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
