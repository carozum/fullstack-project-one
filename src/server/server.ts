import express from "express";
console.log(express);
const server = express();

// templating
server.set("view engine", "ejs");

// Define the middleware
server.use(express.static("dist"));
server.use("/", (req, res) =>{
    // res.send("hello");
    res.render("index", {
        content : "Hello <em>you</em>!"
    });
})

// listen to requests on port 8080 and IP host 0.0.0.0
server.listen(8080 , "0.0.0.0", ()=>{
    console.info("express is listening at http://0.0.0.0:8080");
});