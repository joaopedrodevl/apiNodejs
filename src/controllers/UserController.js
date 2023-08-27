import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.status(200).json({
        id, nome, email,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.status(200).json({
        users,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json(null);
      }

      const { nome, email } = user;

      return res.status(200).json({
        id, nome, email,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const id = req.userId;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      const userAtualizado = await user.update(req.body);
      const { nome, email } = userAtualizado;
      return res.status(200).json({
        id, nome, email,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const id = req.userId;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      await user.destroy();
      return res.status(200).json({
        apagado: true,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();

/**
 *Códigos HTTP mais comuns:

 *200 - OK
 *201 - Created
 *400 - Bad Request
 *401 - Unauthorized
 *403 - Forbidden
 *404 - Not Found
 *500 - Internal Server Error
 *502 - Bad Gateway
 *503 - Service Unavailable
 *504 - Gateway Timeout
*/
