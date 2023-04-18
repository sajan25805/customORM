import http from "http";
import main from "./config/connection.js";

const server = http.createServer((req, res) => {
  res.end('Hello, world!');
});

const app = server.listen(8000, () => {
 main().then(()=>{
    console.log("Successfully Connected To The Database!")
})

 .catch(error=>{
    console.log(error)
   })
});




