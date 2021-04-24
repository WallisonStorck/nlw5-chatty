import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";


class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UserRepository);
  }


  async create(email: string) {
    // Verificar se o usuário existe
    const userExists = await this.usersRepository.findOne({
      email,
    });
    // Se existir, retornar user
    if (userExists) {
      return userExists;
    }
    const user = this.usersRepository.create({
      email,
    });
    // Se não existir, salvar no DB.
    await this.usersRepository.save(user);

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });

    return user;
  }
}

export { UsersService };