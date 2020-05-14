const mongoose = require('mongoose');
const uuid = require('uuid/v4');

mongoose.connect("mongodb://localhost:27017/hogwarts",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const Tutor = mongoose.model('Tutor', {
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
    town:{
      type:String
    },
    hashedPassword:{
        type:String
    },
    state:{
      type:String
     },
     tutorSubjects:{
       type:Array,
       "default":[]
     },
     availability: {
        type: Array,
        "default": []
    },
    avgRatings:{
      type:Number,
      "default": 0
    },
    reviews:{
        type:Array,
        "default":[]
    }
})

let tutorArray = [];
const Snape = new Tutor({
    _id:"e01b7e23-b68c-4631-859b-ee148cde5c1d",
    //_id:uuid(),
    email: "severus@snape.com",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    firstName: "Severus",
    lastName: "Snape",
    town: "Hoboken",
    state: "NJ",
    tutorSubjects:[{
      subjectName : "Maths",
      proficiency : "Advanced",
      price : "30",
      teaches : [],
    }],
    availability:[{
        day: "Thursday",
        dayNum: 4,
        start: 1496320200000,//milliseconds since the  Jan 1st, 1970, 00:00:00, retrieved from html type ='datetime-local' and converted in JS
        startH: 8,
        startM: 30,
        startExtended: new Date(1496320200000),
        end: 1496320200000,
        endH: 9,
        endM: 30,
        endExtended: new Date(1496323800000)
    }],
    avgRatings : 4
})
tutorArray.push(Snape)

const Moody = new Tutor({
    _id: "e9247437-33a6-4d9f-8bc1-f269506dc774",
    //_id:uuid(),
    email: "alastor@moody.com",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    firstName: "Alastor",
    lastName: "Moody",
    town: "Dublin",
    state: "CA",
    tutorSubjects:[{
      subjectName : "Science",
      proficiency : "Advanced",
      price : "25",
      teaches : [],
    }],
    avgRatings : 3
})
tutorArray.push(Moody)

const Lupin = new Tutor({
    _id:"92e75cef-091a-4033-afb5-261eaecd3ec2",
    //_id:uuid(),
    email: "remus@lupin.com",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    firstName: "Remus",
    lastName: "JohnLupin",
    town: "Dallas",
    state: "TX",
    tutorSubjects:[{
      subjectName : "Computer Science",
      proficiency : "Intermediate",
      price : "100",
      teaches : [],
    }]
})
tutorArray.push(Lupin)

const Minerva = new Tutor({
    _id: "4adec776-2d17-4a8d-a792-1792cb4f06b4",
    //_id:uuid(),
    email: "minerva@mcgonagall.com",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    firstName: "Minerva",
    lastName: "McGonagall",
    town: "Seattle",
    state: "Washington",
    reviews: ["59275435-393d-431a-b248-7cd247f66b82"],
    tutorSubjects:[{
      subjectName : "Statistics",
      proficiency : "Beginner",
      price : "50",
      teaches : ["263253c7-29e9-436d-95fa-645abd9aaa15"],
    }],
    avgRatings: 3
})
tutorArray.push(Minerva)

const Sybill = new Tutor({
    _id:"60625b69-1b3e-4743-b011-ac410723ebac",
    //_id:uuid(),
    email: "sybill@trelawney.com",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    firstName: "Sybill",
    lastName: "Trelawney",
    town: "Baltimore",
    state: "Maryland",
    reviews: ["a01cc6db-1c34-4552-b7ca-610f8cfb5abd"],
    tutorSubjects:[{
      subjectName : "Maths",
      proficiency : "Intermediate",
      price : "10",
      teaches : ["c163eeff-3566-49c8-b63e-851da5b2de07"]
    },
    {
      subjectName : "Magic",
      proficiency : "Advanced",
      price : "12",
      teaches : []
    }],
    avgRatings: 5
})
tutorArray.push(Sybill)

const Rolanda = new Tutor({
    _id: "855506ea-07cd-4081-8bde-5dfdb8ea9275",
    //_id:uuid(),
    email: "rolanda@hooch.com",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    firstName: "Rolanda",
    lastName: "Hooch",
    town: "Miami",
    state: "Florida",
    tutorSubjects:[{
      subjectName : "Computer Science",
      proficiency : "Advanced",
      price : "150",
      teaches : [],
    }],
    avgRatings : 2
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
    town:{
        type:String
    },
    state:{
        type:String
    },
    email: {
        type:String
    },
    availability: {//lefft empty for now, have not yet implemented its database
        type: Array,
        "default": []
    },
    /*education: {// this does not exist in DB proposal
        type: String
    },*/

    /*info: {
        type:String
    },*/
    studentSubjects: {//left empty for now, have not yet implemented its database
        type: Array,
        "default": []
    }
})

let studentArray = [];
const harry = new Student({
    _id: "263253c7-29e9-436d-95fa-645abd9aaa15",
    //_id: uuid(),
    firstName: "Harry",
    lastName:"Potter",
    town:"Little Whinging",
    state:"Surrey",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    email: "horcrux@gmail.com",
    availability:[{
        day: "Thursday",
        dayNum: 4,
        start: 1496320200000,//milliseconds since the  Jan 1st, 1970, 00:00:00, retrieved from html type ='datetime-local' and converted in JS
        startH: 8,
        startM: 30,
        startExtended: new Date(1496320200000),
        end: 1496320200000,
        endH: 9,
        endM: 30,
        endExtended: new Date(1496323800000)
    }],
    studentSubjects: [
        {
            subjectName:"Statistics",
            proficiency:"Beginner",
            tutoredBy:"59275435-393d-431a-b248-7cd247f66b82"//this is the Minerva-Harry pair
        }
    ]
    /*  info: "The boy who lived",
    education: "Junior",
    subjects: ["Flying", "Defence Against the Dark Arts", "Potions"] */
})
studentArray.push(harry)

const hermoine = new Student({
    _id:"8c3d8329-3a83-4112-9782-3a255fa7fc09",
    //_id:uuid(),
    firstName: "Hermoine",
    lastName: "Granger",
    town: "Hogsmeade",
    state: "Britain",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    email: "bestwitch@gmail.com"
    /*  info: "One of the most talented witches.",
    education: "Ph.D",
    subjects: ["Defence Against the Dark Arts", "Potions", "Transfiguration", "Divination"]*/
})
studentArray.push(hermoine)

const ron = new Student({
    _id:"e3094818-46bf-48a8-8575-f25a0f9a4a7b",
    //_id:uuid(),
    firstName: "Ron",
    lastName: "Weasley",
    town: "The Burrough",
    state: "Devon",
    hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    email: "hermoineHusband@gmail.com"
    /*  info: "Hermoine's future husband.",
    education: "Freshman",
    subjects: ["Flying"]*/
})
studentArray.push(ron)

const luna = new Student({
    _id:"75de6056-87e4-4434-98e2-a6864e4ed288",
    //_id:uuid(),
    firstName: "Luna",
    lastName: "Lovegood",
    town: "Rook",
    state: "New Jersey",
    hashedPassword:"$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
    email: "nargles@gmail.com"
    /*  info: "A true, delightful Ravenclaw with a sing-song voice.",
    education: "Senior",
    subjects: ["Defence Against the Dark Arts", "Divination"]*/
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
    availability: [
        {
            day: "Thursday",
            dayNum: 4,
            start: 1496320200000,
            startH: 8,
            startM: 30,
            startExtended: new Date(1496320200000),
            end: 1496323800000,
            endH: 9,
            endM: 30,
            endExtended: new Date(1496323800000)
        },
        {
            day: "Friday",
            dayNum: 5,
            start: 1496413800000,
            startH: 10,
            startM: 30,
            startExtended: new Date(1496413800000),
            end: 1496460600000,
            endH: 23,
            endM: 30,
            endExtended: new Date(1496460600000)
        }
    ],
    studentSubjects: [
        {
            subjectName:"Maths",
            proficiency:"Intermediate",
            tutoredBy:"a01cc6db-1c34-4552-b7ca-610f8cfb5abd"//this is the Sybill-Lucius pair
        }
    ]
    /* info: "A charming boy who is a little bit lost",
    education: "Junior",
    subjects: ["Flying", "Potions", "Divination"]*/
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