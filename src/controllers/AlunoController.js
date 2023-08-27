import Aluno from '../models/Aluno';
import Photo from '../models/Photo';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['filename', 'url', 'id'],
        },
      });

      res.status(200).json({
        alunos,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      const {
        id, nome, sobrenome, email, idade, peso, altura,
      } = aluno;

      return res.status(200).json({
        id,
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      });
    } catch (error) {
      return res.status(400).json({
        error: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      const {
        id, nome, sobrenome, email, idade, peso, altura,
      } = alunoAtualizado;

      return res.status(200).json({
        id,
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      });
    } catch (error) {
      return res.status(500).json({
        error: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      await aluno.destroy();

      return res.status(200).json({
        apagado: true,
      });
    } catch (error) {
      return res.status(500).json({
        error: error.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['filename', 'url', 'id'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      return res.status(200).json({
        aluno,
      });
    } catch (error) {
      return res.status(500).json({
        error: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
