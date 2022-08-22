import Guest from '../models/Guest.js';

class guestRepository {
  async create(name, idMesa, status) {
    return new Promise((resolve, reject) => {
      const guest = new Guest({
        name,
        idMesa,
        status
      })

      try {
        guest.save();
        resolve(true);
      } catch (err) {
        reject(err);
      }
    })
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      Guest.deleteOne({ _id: id }, (err) => {
        if (err) {
          reject(false);
        }
        resolve(true);
      })

    })
  }

  async getGuests() {

    const guests = await Guest.find();

    return guests;
  }

  async update(id, name, idMesa, status) {
    return new Promise((resolve, reject) => {

      Guest.updateOne({ _id: id }, { idMesa: idMesa, name: name, status: status }, (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      })
    })
  }

  async updateIdTable(id, idMesa) {
    return new Promise((resolve, reject) => {

      Guest.updateOne({ _id: id }, { idMesa: idMesa}, (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      })
    })
  }
}

export default new guestRepository();