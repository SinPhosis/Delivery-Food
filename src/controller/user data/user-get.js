import { Users } from "../../models/users.model.js";
const userGet = async ( req, res ) => {
  try {
 const userData = await Users.find();
    res.send(userData).status(200);
  } catch (error) {
    console.log("Error!", error);
    res.send().status(400);
  }
};
export default userGet