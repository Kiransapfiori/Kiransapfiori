const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use("/",express.static("webapp/"));
app.get('/home', function (req, res) {
    res.send("<label> what is your name</label><input><br><button> click me </button>")
  })
  this.ven = [
    {
    "id":1,
    "name":"anubhav",
    "city":"konni"
  },
  {
    "id":2,
    "name":"kiran",
    "city":"konni"
  },
  {
    "id":3,
    "name":"ammu",
    "city":"konni"
  }
  ];
  app.get('/ven',(req, res)=>{
    res.json(this.ven);
  })
  // app.get('/index.html',(req, res)=>{
  //   res.sendFile(__dirname + '/index.html');
  // })
console.log("your server start  on http://localhost:3000");
app.listen(3000) 