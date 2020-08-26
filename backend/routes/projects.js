const router = require('express').Router();
let Project = require('../models/project.model');
const pool = require('../db');

router.route('/').get((req, res) => {
  Project.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//post to Postgres
router.route("/testdb").post( async (req, res) =>{
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

//Post to mongoDB
router.route('/add').post((req, res) => {
    const projectName = req.body.projectName;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newProject = new Project({
        projectName,
        description,
        date,
    });

  newProject.save()
    .then(() => res.json('Project added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;