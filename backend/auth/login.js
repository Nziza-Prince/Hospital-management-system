const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../database/database.js");

// Secret key for signing the JWT
const JWT_SECRET = "superSecretChampagne"; // Replace with a secure secret key

router.post("/", async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Fetch user by email and role
    const userQuery = "SELECT * FROM users WHERE email = $1 AND role = $2";
    const userResult = await pool.query(userQuery, [email, role]);

    if (userResult.rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = userResult.rows[0];

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Fetch role-specific details
    let roleDetails = {};
    let roleQuery = "";

    switch (role) {
      case "doctor":
        roleQuery = `SELECT specialty, license_number, experience_years FROM doctors WHERE user_id = $1`;
        break;
      case "patient":
        roleQuery = `SELECT date_of_birth, gender, insurance_number FROM patients WHERE user_id = $1`;
        break;
      case "admin":
        roleQuery = `SELECT full_name FROM administrators WHERE user_id = $1`;
        break;
      default:
        return res.status(400).json({ error: "Invalid role" });
    }

    const roleResult = await pool.query(roleQuery, [user.id]);
    if (roleResult.rows.length > 0) {
      roleDetails = roleResult.rows[0];
    }

    // Generate a JWT token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Successful login response
    res.status(200).json({
      message: "Login successful",
      token: token, // Include the token in the response
      user: {
        id: user.id,
        name: user.username,
        email: user.email,
        role: user.role,
        ...roleDetails, // Spread role-specific details
      },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error logging in" });
  }
});

module.exports = router;
