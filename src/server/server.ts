import express from "express";
import config, {PORT} from "./config";

// console.log(express);
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
server.listen(parseInt(config.PORT) , config.HOST, ()=>{
    console.info(`express is listening at ${config.SERVER_URL}`);
    // console.log(config);
    // console.log({PORT});
});