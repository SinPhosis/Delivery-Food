import fs from "fs";
import bcrypt from "bcrypt";
export const createUsers = (req, res) => {
  const { email, password, username } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 8);

    const rawUserData = fs.readFileSync("src/controller/db/users.json");

    const user = JSON.parse(rawUserData);

    user.push({ email: email, password: hashedPassword, username: username });

    fs.writeFileSync("src/controller/db/users.json", JSON.stringify(user));

    res.status(201).json({
        success: true,
        user: username
    })
  } catch (error) {
    res
      .status(400)
      .json({
        error: "Bad Request",
        message: `Error while creating user, ${error}`,
      });
  }
};