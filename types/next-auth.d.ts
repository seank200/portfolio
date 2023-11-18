import { ObjectId } from "mongodb";
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: Pick<User, "groups"> & DefaultSession["user"];
  }

  interface User {
    groups?: ObjectId[];
  }
}
