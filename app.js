const express = require("express");
const app = express();
const port = process.env.PORT || 8081;

app.get('/', (req,res) => {
    res.send("<h1>메롱 약오르지 까꿍! </h1>")
})

app.get('/health', (req,res) => {
    res.send("I m really HEALTY BOY!~~!")
})

app.listen(port, () => {
    console.log(`SERVER LISTEING ON ${port}!`)
}) 

