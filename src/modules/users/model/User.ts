import { v4 as uuidv4 } from "uuid";

class User {
  name: string;
  email: string;
  admin: false | boolean;
  id: string = uuidv4();
  created_at: Date;
  updated_at: Date;
}

export { User };
