import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    if (!user_id) {
      throw new Error("User id not informed on the request");
    }

    const userExists = this.usersRepository.findById({ user_id });

    if (!userExists) {
      throw new Error("This user id does not exists");
    }

    const user = this.usersRepository.turnAdmin(userExists);

    return user;
  }
}

export { TurnUserAdminUseCase };
