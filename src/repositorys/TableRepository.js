import Table from '../models/Table.js';

class TableRepository {
  async createTable(number, description) {
    return new Promise((resolve, reject) => {
      const table = new Table({
        number,
        description
      })

      try {
        table.save();
        resolve(true);
      } catch (err) {
        reject(err);
      }
    })
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      Table.deleteOne({ _id: id }, (err) => {
        if (err) {
          reject(false);
        }

        resolve(true);
      })

    })
  }

  async getTables() {
    const tables = await Table.find();

    return tables;
  }
}

export default new TableRepository();