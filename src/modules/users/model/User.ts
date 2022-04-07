import { v4 as uuidv4 } from "uuid";

class User {
  id: string = uuidv4();
  name: string;
  admin: false;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export { User };
