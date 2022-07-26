const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const users = [
    {
        name: "sergio",
        id: 1,
        city: "London"
    },
    {
        name: "marcos",
        id: 2,
        city: "Paris"
    },
    {
        name: "julia",
        id: 3,
        city: "Toronto"
    },
    {
        name: "leon",
        id: 4,
        city: "New York"
    },
    {
        name: "john",
        id: 5,
        city: "Rio de Janeiro"
    },
    {
        name: "bela",
        id: 6,
        city: "Fortaleza"
    }

];

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/users',(req,res)=> {
    res.send(users);
})

app.get('/change',(req,res)=> {
    res.sendFile(__dirname + '/change.html');
})

app.post('/change',(req,res)=> {
    let name = req.body.username;
    let newCity = req.body.newcity;

    let foundUser = users.find((user) => user.name === name)

    if(foundUser != undefined){
        foundUser.city = newCity;
        res.send("Done");
    }
    else{
        res.send("Wrong Username");
    }
    
})

app.use((req,res)=>{
    res.status(404);
    res.send('not found');
})

app.listen('3000',() => console.log("Servidor ligado na porta 3000..."));
