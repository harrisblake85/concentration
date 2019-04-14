const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001

app.use(express.static('public'));


app.use(express.urlencoded({ extended: false}));
app.use(express.json());


app.get("/",(req,res) => {
  res.sendFile("public/index.html");
});

app.listen(PORT,() => {
console.log("Concentration: "+PORT);
});
