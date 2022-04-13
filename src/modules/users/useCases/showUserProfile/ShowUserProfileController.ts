import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;

    try {
      const existingUser = this.showUserProfileUseCase.execute(user_id);
      return response.status(201).send(existingUser);
    } catch (error) {
      return response.status(500).send({ error: error.message });
    }
  }
}

export { ShowUserProfileController };
