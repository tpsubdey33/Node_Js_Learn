import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://deysubrataadd_db_user:6IoFHBhsgchZkX9Z@cluster0.n7in0ew.mongodb.net/",
    {
      dbName: "NodeJS Mastert Course",
    }
  )
  .then(() => console.log("MongoDb Connected...!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post('/form-submit',(req,res)=>{
    console.log("geting the data from body",req.body);

    res.json({
        message:"Your from has been submited..!",
        success: true
    })
})

const port = 1000;
app.listen(port, () => console.log(`Server is Running on port ${port}`));
