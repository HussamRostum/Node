const uuid=require("uuid");

var notes = [
    {
      firstname: "Hussam",
      lastname: "Rostum",
      age: 25,
      id: 1
    },
     {
      firstname: "Mohamad",
      lastname: "Ahmad",
      age: 37,
      id: 2
    },
    {
      firstname: "Syam",
      lastname: "shabanmas",
      age: 17,
      id: 3
    },
     {
      firstname: "sweet",
      lastname: "love",
      age: 17,
      id: 4
    }
]
//create
exports.create = function(req, res) {
  const newNote = {
      firstname: req.body.firstname==""? console.log("error man") : req.body.firstname,
      lastname: req.body.lastname==""? console.log("error man") : req.body.lastname,
      age: req.body.age==""? console.log("error man") : req.body.age,
      id: uuid.v4()
    }
notes.push(newNote);
res.json({message: "note added successfuly"})
};

//findall
exports.findAll = function(req, res) {
  notes <= 0 ? res.json({message: "note empty"}) :res.json({ notes}) ; 
};


//findone
exports.findOne = function(req, res) {
  const note = notes.filter(el => el.id == req.params.id);
  note=="" ?  res.json({message: "note empty"}) :  res.json({note}) ;
};

//update
exports.update = function(req, res) {
  const note = notes.filter(el => el.id == req.params.id);
  note=="" ?  res.json({message: "note empty"}) :
  note[0].firstname = req.body.firstname==""? console.log("error man") : req.body.firstname,
  note[0].lastname = req.body.lastnam==""? console.log("error man") : req.body.lastname,
  note[0].age = req.body.age==""? console.log("error man") : req.body.age,

res.json({message: "note updated successfuly", note})
};

exports.delete = function(req, res) {
  const note = notes.filter(el => el.id == req.params.id);
  if(note=="")
  {  res.json({message: "there is nothing to delete"}) }
  
  let index = notes.indexOf(note[0])
    console.log(index)
    if(index > -1 ){
        notes.splice(index, 1)
    }
   res.send({message: "note deletd successfully"})
};