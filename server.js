import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("./dist"));

app.listen(3000, error => {
    if(error) return console.log(error);
    console.log("Server started!");
});