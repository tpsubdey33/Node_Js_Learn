import exprees from 'express';


const app = exprees();

const products = [
  { title: "iphone - 15", price: 75000 },
  { title: "Oneplus - 12", price: 45000 },
  { title: "Google pixel", price: 55000 },
  { title: "Vivo - 15", price: 15000 },
];

app.get('/',(req,res)=>{
    let name = 'Ram'
    res.render('index.ejs',{name,products})
})

const port = 1000;

app.listen(port,()=>console.log(`Server is running on port ${port}`))