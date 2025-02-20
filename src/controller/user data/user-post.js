import { Users } from "../../models/users.model.js";
const userPost = async ( req, res ) => {
  try {
    const newUser = await Users.create({
      name: "test",
    });
    res.send(newUser).status(200)
  } catch (error) {
    console.log("Error!", error);
    res.send().status(400);
  }
};
export default userPost