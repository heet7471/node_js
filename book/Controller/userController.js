const user = require("../UserModel/usermodel");

const Register = async (req, res) => {
    const data = await user.create(req.body);
    res.send(data);
};

const GetUser = async (req, res) => {
    const data = await user.find();
    res.send(data);
};

const DeleteUser = async (req, res) => {
    const data = await user.findByIdAndDelete(req.params.id);
    res.send({ message: "User Deleted", data });
};

const EditUser = async (req, res) => {
    const id = req.params.id;
    const data = await user.findByIdAndUpdate(id, req.body);
    res.send(data);
};

module.exports = { Register, GetUser, DeleteUser, EditUser };



