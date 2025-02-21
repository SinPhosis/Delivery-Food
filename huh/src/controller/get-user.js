import fs from "fs";

const getUsers = (req, res) => {
    const rawUserData = fs.readFileSync("src/controller/db/users.json");
    res.send(rawUserData)
}
export default getUsers