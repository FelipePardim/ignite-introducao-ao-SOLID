import { v4 as uuidv4 } from "uuid";

class User {
  name: string;
  email: string;
  id: string = uuidv4();
}

export { User };
