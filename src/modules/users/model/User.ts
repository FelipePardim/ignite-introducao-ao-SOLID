import { v4 as uuidv4 } from "uuid";

class User {
  id: string = uuidv4();
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export { User };
