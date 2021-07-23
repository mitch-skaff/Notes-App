const path = require('path');
const fs = require("fs");
const router = require('express').Router();
const notesData = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
    res.json(notesData)
})

router.post('/notes', (req, res) => {

    req.body.id = uuidv4();
    const newNote = req.body;
  
    notesData.push(newNote);
  
    fs.writeFileSync("../db/db.json", JSON.stringify(notesDB));
    res.json(notesDB);
});

router.delete("/api/notes/:id", (req, res) => {
    const noteId = req.params.id;
  
    notesData = notesData.filter(notes => notes.noteId != noteId);
  
    fs.writeFileSync("../db/db.json", JSON.stringify(notesData));
    res.json(notesData);
});



module.exports = router;






