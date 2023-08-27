import dotenv from 'dotenv';
import Admin from '../models/Admin';

dotenv.config();

class AdminController {
  async store(req, res) {
    try {
      const { token } = req.body;

      if ((token !== process.env.ADMIN_TOKEN) || !token) {
        return res.status(401).json({
          errors: ['Admin Token inválido'],
        });
      }

      const novoAdmin = await Admin.create(req.body);
      const { id, name, email } = novoAdmin;
      return res.status(200).json({
        id, name, email,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { token } = req.body;

      if ((token !== process.env.ADMIN_TOKEN) || !token) {
        return res.status(401).json({
          errors: ['Admin Token inválido'],
        });
      }

      const admin = await Admin.findByPk(req.adminId);

      if (!admin) {
        return res.status(400).json({
          errors: ['Admin não existe'],
        });
      }

      const adminAtualizado = await admin.update(req.body);
      const { id, name, email } = adminAtualizado;
      return res.status(200).json({
        id, name, email,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new AdminController();
