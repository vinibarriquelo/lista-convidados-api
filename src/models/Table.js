import mongoose from "mongoose";

const Table = mongoose.model('Table', {
  number: String,
  description: String
})

export default Table;