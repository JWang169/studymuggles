const mongoose = require('mongoose');
const uuid = require('uuid/v4');

mongoose.connect("mongodb://localhost:27017/hogwarts",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const People = mongoose.model('people', {
    _id: {
        type: String
    },
    email:{
        type:String
    },
    hashedPassword:{
      type: String
    },
    firstName: {
        type:String
    },
    lastName: {
      type:String
    },
    department:{
        type:String
    },
    isPure:{
        type:Boolean
    },
    hashedPassword:{
        type:String
    },
    subjects:{
       type:Array,
       "default":[]
    }

})

let peopleArray = [];
const Snape = new Tutor({
    _id:"e01b7e23-b68c-4631-859b-ee148cde5c1d",
    email: "severus@snape.com",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    firstName: "Severus",
    lastName: "Snape",
    isPures: false,
    department: "Hogwarts",
    subjects: ["Portion", "Defence against the Dark Art"]
    
})
peopleArray.push(Snape)

const Moody = new Tutor({
    _id: "e9247437-33a6-4d9f-8bc1-f269506dc774",
    email: "alastor@moody.com",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    firstName: "Alastor",
    lastName: "Moody",
    isPures: false,
    department: "Hogwarts",
    subjects: ["Defence against the Dark Art"]
})
tutorArray.push(Moody)

const Lupin = new Tutor({
    _id:"92e75cef-091a-4033-afb5-261eaecd3ec2",
    email: "remus@lupin.com",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    firstName: "Remus",
    lastName: "JohnLupin",
    isPures: false,
    department: "Hogwarts",
    subjects: ["Defence against the Dark Art"]
})
tutorArray.push(Lupin)

const Minerva = new Tutor({
    _id: "4adec776-2d17-4a8d-a792-1792cb4f06b4",
    //_id:uuid(),
    email: "minerva@mcgonagall.com",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    firstName: "Minerva",
    lastName: "McGonagall",
    isPures: true,
    department: "Hogwarts",
    subjects: ["Defence against the Dark Art"]
})
tutorArray.push(Minerva)

const Sybill = new Tutor({
    _id:"60625b69-1b3e-4743-b011-ac410723ebac",
    email: "sybill@trelawney.com",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    firstName: "Sybill",
    lastName: "Trelawney",
})
tutorArray.push(Sybill)

const Rolanda = new Tutor({
    _id: "855506ea-07cd-4081-8bde-5dfdb8ea9275",
    email: "rolanda@hooch.com",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    firstName: "Rolanda",
    lastName: "Hooch",
  })
tutorArray.push(Rolanda)


for(t in tutorArray){
    tutorArray[t].save().then(() => {
        console.log(Snape)
    }).catch((error) => {
        console.log('Error', error)
    })
}

const Student = mongoose.model('Student', {
    _id: {
        type: String
    },
    firstName: {
        type:String
    },
    lastName: {
        type:String
    },
    hashedPassword: {
        type:String//For now, all passwords in seed will default to
        // $2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK
        //from the lab 10
    },
    email: {
        type:String
    },    department:{
        type:String
    },
    isPure:{
        type:Boolean
    },
    subjects:{
       type:Array,
       "default":[]
    }
    /*info: {
        type:String
    },*/
})

let studentArray = [];
const harry = new Student({
    _id: "263253c7-29e9-436d-95fa-645abd9aaa15",
    //_id: uuid(),
    firstName: "Harry",
    lastName:"Potter",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    email: "horcrux@gmail.com",

    /*  info: "The boy who lived",
    education: "Junior",
    subjects: ["Flying", "Defence Against the Dark Arts", "Potions"] */
})
studentArray.push(harry)

const hermoine = new Student({
    _id:"8c3d8329-3a83-4112-9782-3a255fa7fc09",
    firstName: "Hermoine",
    lastName: "Granger",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    email: "bestwitch@gmail.com",
    subjects: ["Defence Against the Dark Arts", "Potions", "Transfiguration", "Divination"]
})
studentArray.push(hermoine)

const ron = new Student({
    _id:"e3094818-46bf-48a8-8575-f25a0f9a4a7b",
    firstName: "Ron",
    lastName: "Weasley",
    town: "The Burrough",
    state: "Devon",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    email: "hermoineHusband@gmail.com",
    subjects: ["Flying"]
})
studentArray.push(ron)

const luna = new Student({
    _id:"75de6056-87e4-4434-98e2-a6864e4ed288",
    firstName: "Luna",
    lastName: "Lovegood",
    hashedPassword:"$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    email: "nargles@gmail.com",
    subjects: ["Defence Against the Dark Arts", "Divination"]
})
studentArray.push(luna)

const malfoy = new Student({
    _id:"c163eeff-3566-49c8-b63e-851da5b2de07",
    //_id: uuid(),
    firstName: "Draco",
    email: "lucius@gmail.com",
    lastName: "Malfoy",
    town: "Slytherin",
    state:"Hogwarts",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    subjects: ["Flying", "Potions", "Divination"]
})
studentArray.push(malfoy)

for(t in studentArray){
    studentArray[t].save().then(() => {
        console.log(studentArray[t])
    }).catch((error) => {
        console.log('Error', error)
    })
}



const TutorPair = mongoose.model('TutorPair', {
    _id: {//id of pair
        type: String
    },
    tutorId:{//id of tutor
        type:String
    },
    studentId: {//id of student
        type:String
    },
    subject:{//subject Taught
        type:String
    },
    proficiency: {//subject's difficulty level
        type:String
    }
})

let tutorPairArray = [];
const sybillMalfoy = new TutorPair({
    _id: "a01cc6db-1c34-4552-b7ca-610f8cfb5abd",
    tutorId: "60625b69-1b3e-4743-b011-ac410723ebac",
    studentId: "c163eeff-3566-49c8-b63e-851da5b2de07",
    subject:"Maths",
    proficiency:"Intermediate"
})
const minervaHarry = new TutorPair({
    _id: "59275435-393d-431a-b248-7cd247f66b82",
    tutorId: "4adec776-2d17-4a8d-a792-1792cb4f06b4",
    studentId: "263253c7-29e9-436d-95fa-645abd9aaa15",
    subject: "Statistics",
    proficiency: "Beginner"
})

tutorPairArray.push(sybillMalfoy);
tutorPairArray.push(minervaHarry);

for(t in tutorPairArray){
    tutorPairArray[t].save().then(() => {
        console.log(tutorPairArray[t])
    }).catch((error) => {
        console.log('Error', error)
    })
}


const Review = mongoose.model('Review', {
    _id: {
        type: String
    },
    tutorId:{
        type:String
    },
    studentId: {
        type:String
    },
    content:{
        type:String
    },
    rating: {
        type:Number
    }
})

let reviewArray = [];
const reviewFirst = new Review({
    _id: "a01cc6db-1c34-4552-b7ca-610f8cfb5abd",
    tutorId: "60625b69-1b3e-4743-b011-ac410723ebac",
    studentId: "c163eeff-3566-49c8-b63e-851da5b2de07",
    content:"Nice course",
    rating: "5"
})
const reviewSecond = new Review({
    _id: "59275435-393d-431a-b248-7cd247f66b82",
    tutorId: "4adec776-2d17-4a8d-a792-1792cb4f06b4",
    studentId: "263253c7-29e9-436d-95fa-645abd9aaa15",
    content: "Good, but kept turning into a cat",
    rating: "3"
})

reviewArray.push(reviewFirst);
reviewArray.push(reviewSecond);

for(r in reviewArray){
    reviewArray[r].save().then(() => {
        console.log(reviewArray[r])
    }).catch((error) => {
        console.log('Error', error)
    })
}