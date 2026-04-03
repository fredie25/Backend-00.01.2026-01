const { User } = require("../models");

const createUser = async (req, res, next) => {
  // console.log("req.body: ", req.body);
  try {
    const { firstName, lastName, email, password } = req.body;

    const user = await User.create({
      firstName,
      lastName,
      email,
      passwordHash: password,
    });

    const created = await User.findByPk(user.id);
    return res.status(201).json({ status: "ok", data: created });
  } catch (error) {
    next(error);
  }
};

const updateUser = (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
  } catch (error) {
    next(error);
  }
};

const deleteUser = (req, res) => {
  return res.send("Delete User");
};

module.exports = { createUser, updateUser, deleteUser };
