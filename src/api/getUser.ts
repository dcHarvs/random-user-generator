import { User } from "../lib/types/user";
import axios from "axios";

export default async function getUser() {
  const { data: { results } } = await axios.get("https://randomuser.me/api");
  const { name, email, picture } = results[0] ?? {};

  const user: User = {
    name,
    email,
    picture,
  }

  return user;
}