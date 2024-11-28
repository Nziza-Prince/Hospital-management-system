const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const pool = require("../database/database.js");

router.post("/", async (req, res) => {
  const { 
    user_name,email,password,role,date_of_birth,gender,insurance_number} = req.body;

  // Basic validation
  if (!user_name || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Check if the user already exists
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the `users` table
    const insertUserQuery = `
      INSERT INTO users (username, email, password, role) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;
    const insertUserValues = [user_name, email, hashedPassword, 'patient']; // Hardcoded 'patient' role
    const userResult = await pool.query(insertUserQuery, insertUserValues);

    const newUser = userResult.rows[0];

    // Insert into patients table
    if (!date_of_birth || !gender) {
      return res.status(400).json({ error: "Missing required patient fields" });
    }

    await pool.query(
      `INSERT INTO patients (user_id, date_of_birth, gender, insurance_number) 
       VALUES ($1, $2, $3, $4);`,
      [newUser.id, date_of_birth, gender, insurance_number || null]
    );

    res.status(201).json({ 
      message: "User created successfully", 
      user: { id: newUser.id, user_name, email, role: 'patient', date_of_birth, gender, insurance_number}
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating user" });
  }
});

module.exports = router;