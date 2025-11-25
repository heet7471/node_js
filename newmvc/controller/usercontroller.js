const UserModel = require("../model/usermodel");

// CREATE (Register / Add user)
const createUser = async (req, res) => {
    try {
        const data = await UserModel.create(req.body);  // { username, password }
        res.status(201).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Error creating user" });
    }
};

// READ - Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.send(users);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Error fetching users" });
    }
};

// READ - Get single user by ID
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Error fetching user" });
    }
};

// UPDATE - Update user by ID
const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
            new: true
        });

        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        res.send(updatedUser);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Error updating user" });
    }
};

// DELETE - Delete user by ID
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        res.send({ message: "User deleted successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Error deleting user" });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
