const express = require('express');
const app = express();

const users = [{
    name: "Soham",
    kidneys:[{
        healthy: false
    },{
        healthy: true
    }]
}]

app.use(express.json());

app.get("/", function(req, res) {
    // write logic
    const sohamKidneys = users[0].kidneys;
    const numberOfKidneys = sohamKidneys.length;

    let numberOfHelthyKidneys = 0;
    for(let i=0; i<numberOfKidneys.length; i++) {
        if(sohamKidneys[i].healthy) {
            numberOfHelthyKidneys = numberOfHelthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHelthyKidneys;

        res.json({
            numberOfKidneys,
            numberOfHelthyKidneys,
            numberOfUnhealthyKidneys
        })
})

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res) {
    for(let i=0; i<users[0].kidneys.length; i++) {
        users[0].kidneys.isHealthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res) {

    if(isThereIsAtleastOneUnhealthyKidneys()) {
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "Done!!!"
        })
    }else {
        res.sendStatus(411,);
    }
})

function isThereIsAtleastOneUnhealthyKidneys() {
    let atleastOneUnhealthyKidneys = false;
    for(let i=0; i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidneys = true;
        }
    }
    return atleastOneUnhealthyKidneys;
}

app.listen(3000);