const express = require("express");
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require("../controller/usercontroller");

const router = express.Router();

// CREATE
router.post("/", createUser);            // POST /user

// READ
router.get("/", getAllUsers);           // GET /user
router.get("/:id", getUserById);        // GET /user/:id

// UPDATE
router.put("/:id", updateUser);         // PUT /user/:id

// DELETE
router.delete("/:id", deleteUser);      // DELETE /user/:id

module.exports = router;
