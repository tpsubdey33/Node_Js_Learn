import express from "express";
import path from "path";

const app = express();

const products = [
  { title: "iphone - 15", price: 75000 },
  { title: "Oneplus - 12", price: 45000 },
  { title: "Google pixel", price: 55000 },
  { title: "Vivo - 15", price: 15000 },
];

// send response
app.get("/", (req, res) => {

    // res.json({
    //   message: "fetched All Products",
    //   ja_ichha: "ja chao tai message dao",
    //   products: products,
    //   success: true,
    // });

  // res.send('<h1>This is Your Response</h1>');

  const dir = path.resolve();
  console.log("My path:=>", dir);

  const url = path.join(dir,'./index.html')

  console.log("Full path = ", url);

  res.sendFile(url);

});

const port = 1000;

app.listen(port, () => console.log(`Server is runing on port ${port}`));
