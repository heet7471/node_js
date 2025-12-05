const bookModel = require("../UserModel/bookModel");


const addbook = async (req, res) => {
    const data = await bookModel.create(req.body);
    res.send(data);
};

const allbook = async (req, res) => {
    const data = await bookModel.find();
    res.send(data);
};

const Deletebook = async (req, res) => {
    const data = await bookModel.findByIdAndDelete(req.params.id);
    res.send({ message: "User Deleted", data });
};

const Editbook = async (req, res) => {
    const id = req.params.id;
    const data = await bookModel.findByIdAndUpdate(id, req.body);
    res.send(data);
};

module.exports = { addbook, allbook, Deletebook, Editbook };



