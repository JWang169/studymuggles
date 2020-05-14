const express = require("express");
const router = express.Router();
const data = require("../data");
const studentData = data.students;
const tutorData = data.tutors;
const pairData = data.pairs;


// List the people this student can chat with
router.get('/chat', async (req, res) => {
  const people = req.body;
  console.log(req.body)
  console.log(people.studentId)
  console.log(typeof(people.studentId))
  try {
    // const student = await studentData.getStudent(JSON.stringify(people.studentId));
    // const tutor = await tutorData.getTutor(JSON.stringify(people.tutorId));
    // const pair = await pairData.getPairFromIds(JSON.stringify(people.tutorId), JSON.stringify(people.studentId));
    
    res.render('../views/chat.ejs');
  } catch (e) {
    console.log(e);
    res.status(404).json({error: e});
  }
});

router.get("/", async (req, res) => {
  try {
    const studentList = await studentData.getAllstudents();
    res.json(studentList);
  } catch (e) {
    // Something went wrong with the server!
    res.status(500).send();
  }
});

//GET /students/{id}
router.get("/:id", async (req, res) => {
  try {
    const student = await studentData.getStudent(req.params.id);
    res.status(200).send(student);
  } catch (e) {
    console.log(e)
    res.status(404).json({ message: "Student not found!" });
  }
});

// Find tutor from a pairId
router.get('/findPair/:id', async (req, res) => {
  try {
    const pair = await pairData.getPair(req.params.id);
    res.status(200).send(pair);
  } catch (e) {
    console.log(e);
    res.status(404).json({error: e});
  }
});

router.post("/login", async (req, res) => {
  const reqStudent= req.body;

  try{
    if(!reqStudent)throw "needs a login request";
    if(!reqStudent.email)throw "needs an email";
    if(!reqStudent.password)throw"needs a password";
    const token = await studentData.login(reqStudent.email,reqStudent.password);
    res.send(token);
  }catch(e){
    res.status(404).json({error: e});
  }
});

router.post('/tutorPair',async(req, res) =>{
  const reqPair = req.body;
  console.log(reqPair)
  try{
    if (!reqPair)throw "needs a request";
    if(!reqPair.tutorId)throw"needs a tutorId";
    if(!reqPair.studentId)throw "needs a studentId";
    if(!reqPair.subject)throw "needs a requested subject";
    if(!reqPair.proficiency)throw"there needs to be a proficiency for the subject";
  }catch(e){
    res.status(404).json({error: e});
  }
  try{
    const newPair= await studentData.createPair(reqPair.tutorId, reqPair.studentId, reqPair.subject, reqPair.proficiency);
    res.status(200).json(newPair);
  }catch(e){
    res.status(404).json({error:e});
  }
})

router.post("/signup", async (req, res) => {
  //NOTE: when creating a new student profile, the studentSubjects and availability Arrays are initially empty
  const reqStudent = req.body;//NOTE: These will need to be updated to match the form data passed in by html

  if(!reqStudent){
    res.status(400).json({error: "You must provide student profile data"});//this should be replaced by an error page redirect in the future
    return;
  }

  if(!reqStudent.firstName){
    res.status(400).json({error: "You must provide a first name"});
		return;
  }
  if(!reqStudent.lastName){
    res.status(400).json({error: "You must provide a last name"});
		return;
  }
  if(!reqStudent.town){
    res.status(400).json({error: "You must provide a town"});
		return;
  }
  if(!reqStudent.state){
    res.status(400).json({error: "You must provide a state"});
		return;
  }
  if(!reqStudent.email){
    res.status(400).json({error: "You must provide an email"});
		return;
  }
  if(!reqStudent.password){
    res.status(400).json({error: "You must provide a password"});
		return;
  }
  try{
    const newStudent = await studentData.createStudent(reqStudent.email, reqStudent.firstName, reqStudent.lastName, reqStudent.password, reqStudent.town, reqStudent.state);
    res.status(200).json({id: newStudent});
    return;
  }catch(e){
    res.status(501).json({error: e});
    return;
  }
});

router.post("/:id/availability", async (req, res) => {//for form POST submission of available times for student
  const availability = await req.body;
  //will need to get the start/end times from HTML, I RECOMMEND HTML FILE USE input type= 'datetime-local',
  //despite its lack of compatability accross browsers, it is provided to the class in the html intro slides


  if(!availability.startTime){
    res.status(400).json({error:"You must select the time of day that you become available"});
    return;
  }

  if(!availability.endTime){
    res.status(400).json({error:"You must select the time of day that you become unavailable"});
    return;
  };

  try{
    const studentAddTime = await studentData.addAvailability(req.params.id, availability.startTime, availability.endTime);
    res.status(200).json(studentAddTime);//returns all available times
    return;
  }catch(e){
    console.log(e);
    res.status(500).json({error: e});
    return;
  }
});

router.put('/:id', async (req, res) => {
  const reqStudent = req.body;
  if(!reqStudent){
    res.status(404).json({error:"no request body found"});
    return;
  }
  if(!reqStudent.firstName){
    res.status(404).json({error:"no first name found"});
    return;
  }
  if(!reqStudent.lastName){
    res.status(404).json({error:"no last name found"});
    return;
  }
  if(!reqStudent.town){
    res.status(404).json({error:"no town found"});
    return;
  }
  if(!reqStudent.state){
    res.status(404).json({error:"no state found"});
    return;
  }/*
  if(!reqStudent.email){
    res.status(404).json({error:"no email found"});
    return;
  }
  if(!reqStudent.password){
    res.status(404).json({error:"no password found"});
    return;
  }*/

  try{
 // const oldStudent = await studentData.getStudent(req.params.id);
  const updatedStudent = {
    firstName: reqStudent.firstName,
    lastName: reqStudent.lastName,
    state: reqStudent.state,
    town: reqStudent.town,
    //password: reqStudent.password,
    //email: reqStudent.email,
    /*availability: oldStudent.availability,//these two don't change in the PUT
    studentSubjects: oldStudent.studentSubjects*/
  }
  const theStudent = await studentData.updateStudent(req.params.id, updatedStudent);
  res.status(200).json(theStudent);//returns a json of the newly updated student
  }catch(e){
    res.status(503).json({error:e})
  }

})

router.delete("/tutorPair/:id", async (req, res) =>{
  try{
    const oldPair = await studentData.getPair(req.params.id);
    await studentData.removePair(oldPair);
    res.status(200).json(oldPair);
  }catch(e){
    res.status(503).json({error: e});
  }
})

router.post('/:id/availability/delete', async (req,res) => {//id here represents the studentId
  //I sure do hope that I can have req.body passed into a delete function.
  const reqAvailable = req.body;
  console.log(reqAvailable)
  try{
    if(!reqAvailable)throw"No request body passed into delete function";
    if(!reqAvailable.start)throw"No start time passed into delete availability";
    if(!reqAvailable.end)throw"No end time passed into delete availability";
  }catch(e){
    res.status(404).json({error: e});
    return;
  }
  try{
    const deletedAvailability = await studentData.removeAvailability(req.params.id, reqAvailable.start, reqAvailable.end);
    res.status(200).json(deletedAvailability);//sends back the deletedArray if you want it.
  }catch(e){
    res.status(503).json({error:e});
  }
})

router.delete("/:id", async (req, res) =>{
  //NOTE 2: TutorPairs will need to be deleted, and all the corresponding entries that that would entail as well
  //NOTE 3: Cookie for this student should be deleted, and maybe the chat history, I dunno how that works
  //NOTE 4: Reviews do not need to be deleted
  try{
    await studentData.getStudent(req.params.id);
  }catch(e){
    res.status(404).json({
      error: "student with this ID not found",
      reason: e
    });
  }
  try{
    const deletedStudent = await studentData.removeStudent(req.params.id);
    res.status(200).json(deletedStudent);//Should have link to home page/account creation.
  }catch(e){
    res.status(500).json({error: e});
  }
});

module.exports = router;
