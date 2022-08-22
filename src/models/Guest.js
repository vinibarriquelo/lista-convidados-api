import mongoose from "mongoose";

const Guest = mongoose.model('Guest', {
  name: String,
  idMesa: String,
  status: Boolean
})

export default Guest;