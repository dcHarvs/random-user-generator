import { User } from "../lib/types/user";
import axios from "axios";

export default async function getUser() {
  const { data: { results } } = await axios.get("https://randomuser.me/api");
  const { id, name, email, picture } = results[0] ?? {};

  const user: User = {
    id,
    name,
    email,
    picture,
  }

  return user;
}