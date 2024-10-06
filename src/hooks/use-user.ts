import { useCookies } from "react-cookie";
import UserApi from "../api/user";
import { v4 as uuid } from "uuid";

export default function useUser() {
  const userApi = new UserApi();

  const [cookies, setCookies] = useCookies(["user"]);

  async function createUser() {
    const newUser = { id: uuid() };
    setCookies("user", JSON.stringify(newUser));
    await userApi.create(newUser);
    return newUser;
  }

  function getUser() {
    return cookies.user;
  }

  return { getUser, createUser };
}
