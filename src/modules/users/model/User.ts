import { v4 as uuidv4 } from "uuid";

class User {
  name: string;
  email: string;
  admin: boolean;
  id: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.admin = false;
    }
  }
}

export { User };
