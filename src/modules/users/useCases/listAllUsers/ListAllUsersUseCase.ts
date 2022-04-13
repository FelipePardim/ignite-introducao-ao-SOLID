import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    if (!user_id) {
      throw new Error("User id not informed on the request");
    }

    const user = this.usersRepository.findById(user_id);
    const isAdmin = user.admin;

    if (isAdmin === false) {
      throw new Error("The user does not have admin rights");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
