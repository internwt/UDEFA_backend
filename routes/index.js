// routes/userRoutes.js
const express = require("express");

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users
 *     description: Returns a list of users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get("/api/users", (req, res) => {
  // Your route logic here
  res.json({ message: "Get users" });
});

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Returns a single user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single user
 */
router.get("/api/users/:id", (req, res) => {
  // Your route logic here
  const userId = req.params.id;
  res.json({ message: `Get user with ID ${userId}` });
});

router.post("/api/users/info", (req, res) => {
  const formData = req.body;
  const { name, father_name, qualification, dob, address } = req.body;

  res.send(formData);
});

module.exports = router;
