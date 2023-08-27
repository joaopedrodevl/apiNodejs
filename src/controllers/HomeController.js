import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    try {
      res.status(200).json({
        home: 'home',
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
}

export default new HomeController();
