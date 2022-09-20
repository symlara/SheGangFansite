import axios from "axios";
import jwt_decode from "jwt-decode";

export const createOrGetUser = async (response: any, addUser: any) => {
  const decoded: { name: string; pic: string; id: string } = jwt_decode(
    response.credential
  );

  const { name, pic } = decoded;

  const user = {
    _id: "id",
    _type: "user",
    image: pic,
  };

  addUser(user);

  await axios.post("http://localhost:3000/api/auth", user);
};
