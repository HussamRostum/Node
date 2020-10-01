module.exports = function(app) {
 
    var notes = require('../controllers/note.controller.js');
 
    // Create a new note
    app.post('/api/notes', notes.create);
 
    // Retrieve all note
    app.get('/api/notes', notes.findAll);
 
    // Retrieve a single note by Id
    app.get('/api/notes/:id', notes.findOne);
 
    // Update a note with Id
    app.put('/api/notes/:id', notes.update);
 
    // Delete a note with Id
    app.delete('/api/notes/:id', notes.delete);
}