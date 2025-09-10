import express from "express";
import mongoose from "mongoose";
import { shortUrl,getOriginalUrl } from "./Controllers/url.js";

const app = express();

// ✅ Add this
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}))

mongoose
  .connect(
    "mongodb+srv://deysubrataadd_db_user:6IoFHBhsgchZkX9Z@cluster0.n7in0ew.mongodb.net/",
    {
      dbName: "NodeJS_Mastert_Course",
    }
  )
  .then(() => console.log("MongoDb Connected...!"))
  .catch((err) => console.log(err));


// index.ejs render
app.get("/", (req, res) => {
  res.render("index", { shortUrl: null }); // no need ".ejs"
});

//   shorting url logic
  app.post('/short',shortUrl)

// redirect to original url using short code :- dynamic rout

app.get('/:shortCode',getOriginalUrl)


const port = 1000;
app.listen(port, () => console.log(`Server is Running on port ${port}`));
