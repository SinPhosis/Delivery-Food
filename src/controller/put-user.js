import fs from "fs";

const putUsers = (req, res) => {
    const rawUserData = fs.readFileSync("src/controller/db/users.json");
    res.send(rawUserData)
}
export default putUsers