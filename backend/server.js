const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const pool = require('./db');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
//MongoDB connection using Mongoose
//Could have also uses MongoClient
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const projectsRouter = require('./routes/projects');
/*
app.post("/testdb", async (req, res) =>{
    try {
        const {description} = req.body;
        const newItem = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newItem.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
*/
app.use('/projects', projectsRouter);





app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});