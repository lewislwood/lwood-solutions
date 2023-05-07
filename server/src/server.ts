import express from "express"
import 'dotenv/config';
import path from "path";


const app = express();
const port = process.env.PORT || 5000; 
const pub = path.resolve(__dirname,process.env.static_folder || "../public" ) 
console.log("static folder", pub);
app.set("view engine", "ejs");

app.use(express.static(pub));
app.use("/", require("./routes/404"));
app.listen  (port, () => {
    console.log("Listening on ", port);
    
});


