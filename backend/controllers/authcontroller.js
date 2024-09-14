const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModals = require("../models/authModal");

const signup = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;
  // const hashedpassword = bcrypt.hashSync(password, 10);
  const newUser = new userModals({
    firstname,
    lastname,
    email,
    password,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "Your account created successfully" });
  } catch (err) {
    next(err);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validuser = await userModals.findOne({ email });
    if (!validuser) return next("user not found");
    const validpassword = bcrypt.compareSync(password, validuser.password);
    if (!validpassword) return next("it is wrong password");
    const token = jwt.sign({ id: validuser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validuser._doc;
    res
      .cookie("access_token", token, { httponly: true })
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};

module.exports = { signup ,signin};
