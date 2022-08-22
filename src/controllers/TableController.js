import TableRepository from "../repositorys/TableRepository.js";

class TableController {

  async create(req, res) {
    const { number, description } = req.body;

    if (!number || !description) {
      return res.status(400).json({ message: 'É preciso preencher os campo.' });
    }

    TableRepository.createTable(number, description).then(() => {
      return res.status(201).json({ message: 'Mesa cadastrada com sucesso !' });
    }).catch((err) => {
      return res.status(500).json(err);
    })

  }

  async delete(req, res) {
    const id = req.params.id;
    const result = await TableRepository.delete(id);

    if (result) {
      return res.status(200).json({ message: 'Mesa excluida com sucesso !' });
    }

    return res.status(500).json({ message: 'Erro ao excluir mesa' });
  }

  async getAllTables(req, res) {
    const tables = await TableRepository.getTables();

    if (!tables) {
      return res.status(400).json({ message: 'Não tem mesas' });
    }

    return res.status(200).json(tables);
  }
}

export default new TableController();