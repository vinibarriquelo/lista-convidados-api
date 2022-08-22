import Guest from "../models/Guest.js";
import GuestRepository from "../repositorys/GuestRepository.js";

class GuestController {
  async create(req, res) {
    const { name, idMesa, status } = req.body;

    const result = await GuestRepository.create(name, idMesa, status);

    if (result === true) {
      return res.status(201).json({ message: 'Convidado criado com sucesso !' });
    }

    return res.status(500).json({ message: result });
  }

  async delete(req, res) {
    const id = req.params.id;
    const result = await GuestRepository.delete(id);

    if (result) {
      return res.status(200).json({ message: 'Convidado excluido com sucesso !' });
    }

    return res.status(500).json({ message: 'Erro ao excluir convidado' });
  }

  async getAllGuests(req, res) {
    const guests = await GuestRepository.getGuests();

    if (!guests) {
      return res.status(400).json({ message: 'Não encontramos convidados' });
    }

    return res.status(200).json(guests);
  }

  async update(req, res) {
    const { name, idMesa, status } = req.body;
    const id = req.params.id;

    const result = await GuestRepository.update(id, name, idMesa, status);

    if (result === true) {
      return res.status(201).json({ message: 'Convidado editado com sucesso !' });
    }

    return res.status(400).json({ message: 'Erro ao editar o convidado.' });
  }

  async updateIdMesaConvidado(req, res) {
    const { idMesa } = req.body;
    const id = req.params.id;

    const result = await GuestRepository.updateIdTable(id, idMesa);

    if (result === true) {
      return res.status(201).json({ message: 'id da mesa editado com sucesso !' });
    }

    return res.status(400).json({ message: 'Erro ao editar o convidado.' });
  }
}

export default new GuestController();