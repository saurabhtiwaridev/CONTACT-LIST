const express=require('express');
const path=require('path');
const port=8000;
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
/*
// middleware 1
app.use(function(req,res,next){
    console.log("Middleware 1 called");
   next();
});
// middleware 2
app.use(function(req,res,next){
    console.log("Middleware 2 called");
    next();
})
*/
var contactList=[
    {
        name:"Saurabh Tiwari",
        phone:"9415971941",
        email:"s.t.48826@gmail.com"
    },
    {
        name:"Vaibhav Tiwari",
        phone:"6284568985",
        email:"s.t.48826@gmail.com"
    },
    {
        name:"Anubhav Tiwari",
        phone:"9569520052",
        email:"s.t.48826@gmail.com"
    },
    {
        name:"Vaibhav Pandey",
        phone:"111111111",
        email:"s.t.48826@gmail.com"
    }
]
app.get('/',function(req,res){
    return res.render('home',{
        title:"Contact List",
        contact_list:contactList
    });
});
app.get('/practise',function(req,res){
    return res.render('practise',{
        title:"Let's play with EJS"
    });
});
app.post('/contact-list',function(req,res){
    //  contactList.push({
    //      name:req.body.name,
    //      phone:req.body.phone
    //  });
    //  return res.redirect('/');
    contactList.push(req.body);
    return res.redirect('back');
});
/*
app.get('/',function(req,res){
//  console.log(__dirname);
 res.send('<h1>Cool,it is running</h1>');
});
app.get('/profile',function(req,res){
 res.send('<h1>this is profile of Mr.Saurabh Tiwari</h1>');
});
app.get('/about',function(req,res){
    res.send('<h1>Saurabh tiwari Is A full stack web developer which worked on latest technology which is releted to real world</h1>');
});
*/
app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        return;
    }
    console.log('Yup!Express Server is running on port:',port);
});