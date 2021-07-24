const path = require('path');
const fs = require("fs");
const router = require('express').Router();
const notesData = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    res.json(notesData)
})

router.post('/notes', (req, res) => {

    req.body.id = uuidv4();
    const newNote = req.body;
  
    notesData.push(newNote);
  
    fs.writeFileSync("../db/db.json", JSON.stringify(notesData));
    res.json(notesData);
});

router.delete("/notes/:id", (req, res) => {
    const id = req.params.id;
  
    notesData = notesData.filter(notes => notes.id != id);
  
    fs.writeFileSync("../db/db.json", JSON.stringify(notesData));
    res.json(notesData);
});



module.exports = router;






