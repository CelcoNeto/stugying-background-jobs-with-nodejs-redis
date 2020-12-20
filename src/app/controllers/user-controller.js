import Queue from '../lib/queue';
class UserController {
  async store(req, res) {
    console.log('Req', req.body);
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };
    await Queue.add({ user });
    return res.status(201).json(user);
  }
}

export const userController = new UserController();
