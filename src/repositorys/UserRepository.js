import User from "../models/User.js";

class UserRepository {
  createUser(name, email, password) {
    return new Promise((resolve, reject) => {
      const user = new User({
        name,
        email,
        password
      })

      try {
        user.save();
        resolve(true);
      } catch (err) {
        reject(err);
      }
    })


  }

  getUserByEmail(email) {
    return User.findOne({ email: email });
  }
}

export default new UserRepository();