import bcrypt from 'bcrypt';
import jsonwebtoken from "jsonwebtoken";
import UserRepository from "../repositorys/UserRepository.js";

class UserController {

  // TODO: Métodos de criação de conta e login funcionando, falta implementar o middleware de autenticação.

  async create(req, res) {
    const { name, email, password } = req.body;
    if (name == '' || email == '' || password == '') {
      return res.status(400).json({ message: 'É preciso definir todos os campos.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'A senha deve conter no mínimo 6 caractres.' });
    }

    const userExists = await UserRepository.getUserByEmail(email);

    if (userExists) {
      return res.status(400).json({ message: 'Esse email já está em uso por outro usuário.' });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);


    UserRepository.createUser(name, email, passwordHash).then(() => {
      return res.status(201).json({ message: 'Usuario cadastrado com sucesso !' });
    }).catch(err => {
      return res.status(500).json(err);
    })
  }

  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatorios.' });
    }

    const user = await UserRepository.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Usuario não encontrado' });
    }

    // const checkPassword = await bcrypt.compare(password, user.password);
    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) {
      return res.status(400).json({ message: 'Dados de login inválido;' });
    }

    try {
      const secret = process.env.SECRET;
      const token = jsonwebtoken.sign({
        id: user.id
      }, secret);

      return res.status(200).json({
        token: token,
        id: user.id
      })

    } catch (err) {
      return res.status(500).json({ message: err })
    }
  }
}

export default new UserController()