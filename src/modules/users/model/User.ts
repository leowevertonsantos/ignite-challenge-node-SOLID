import { v4 as uuidV4 } from "uuid";

class User {
  public id: string;
  public name: string;
  public email: string;
  public created_at: Date;
  public updated_at: Date;
  public admin = false;

  constructor(id?: string) {
    if (!id) {
      this.id = uuidV4();
    }
  }
}

export { User };
