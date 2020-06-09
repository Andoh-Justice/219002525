const express = require('express');
const router = express.Router();
const Student = require('../database/Student');

router.get('/', (req, res)=>{
    Student.find({}).then((allstudents)=>{
        res.json(allstudents);
    }).catch((error)=>{ res.json(error.message)})
});

router.post('/', (req, res)=>{
    const data = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        DateOfBirth : req.body.DateOfBirth,
        contact: req.body.contact
    }
    Student.create(data).then((newStudent)=>{
        res.json(newStudent)
    })
});

router.put('/update/:id', (req, res)=>{
    const data = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        DateOfBirth : req.body.DateOfBirth,
        contact: req.body.contact
    }
    
    Student.findByIdAndUpdate({_id: req.params.id}).then((student)=>{
        console.log(student)
        if(student){
            student.firstName = data.firstName
            student.lastName = data.lastName
            student.DateOfBirth = data.DateOfBirth
            student.contact = data.contact

            student.save(()=>{
                res.json(student);
            })
        }
    }).catch((error)=>{ res.json(error.message)});
});

router.get('/delete/:id', (req, res)=>{
    Student.findByIdAndDelete({_id: req.params.id}).then((deletedStudent)=>{
        res.sendStatus(200)
    }).catch((error)=>{ res.send(error)})
});

module.exports = router;