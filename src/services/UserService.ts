import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";


class UserService {
  async create(email: string) {
    const userRepository = getCustomRepository(UserRepository);
    // Verificar se o usuário existe
    const userExists = await userRepository.findOne({
      email,
    });

    // Se existir, retornar user
    if (userExists) {
      return userExists;
    }

    const user = userRepository.create({
      email,
    });

    await userRepository.save(user);

    // Se não existir, salvar no DB.
    return user;
  }
}

export { UserService };