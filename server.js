const express=require("express");
const mysql=require("mysql2");
const cors=require("cors");


const app=express();

app.use(cors());
app.use(express.json());



const db=mysql.createConnection({

host:"localhost",
user:"root",
password:"",
database:"bus_tickets_booking_system"

});



db.connect(()=>{
console.log("Database Connected");
});



// Passenger API

app.post("/passenger",(req,res)=>{

let q="INSERT INTO Passenger VALUES(NULL,?,?,?,?,?,?)";

db.query(q,Object.values(req.body),
err=>{
if(err) res.send(err);
else res.send("Passenger Added");
});

});




// Bus API

app.post("/bus",(req,res)=>{

let q=
"INSERT INTO Bus VALUES(NULL,?,?,?,?)";

db.query(q,Object.values(req.body),
err=>{
if(err) res.send(err);
else res.send("Bus Added");
});

});




// Route API

app.post("/route",(req,res)=>{

let q=
"INSERT INTO Route VALUES(NULL,?,?,?)";

db.query(q,Object.values(req.body),
err=>{
if(err) res.send(err);
else res.send("Route Added");
});

});




// Schedule API

app.post("/schedule",(req,res)=>{

let q=
"INSERT INTO Schedule VALUES(NULL,?,?,?,?)";

db.query(q,Object.values(req.body),
err=>{
if(err) res.send(err);
else res.send("Schedule Added");
});

});




// Booking API

app.post("/booking",(req,res)=>{

let q=
"INSERT INTO Booking VALUES(NULL,?,?,?,?)";

db.query(q,Object.values(req.body),
err=>{
if(err) res.send(err);
else res.send("Booking Added");
});

});




// Ticket API

app.post("/ticket",(req,res)=>{

let q=
"INSERT INTO Ticket VALUES(NULL,?,?,?,?)";

db.query(q,Object.values(req.body),
err=>{
if(err) res.send(err);
else res.send("Ticket Added");
});

});




// Payment API

app.post("/payment",(req,res)=>{

let q=
"INSERT INTO Payment VALUES(NULL,?,?,?,?,?)";

db.query(q,Object.values(req.body),
err=>{
if(err) res.send(err);
else res.send("Payment Added");
});

});





app.listen(3000,()=>{

console.log("Server running at port 3000");

});