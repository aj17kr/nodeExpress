//require
const express=require('express');
const hbs=require('hbs');
const fs=require('fs');

//dynamic port for heroku
const port=process.env.PORT || 3000;
//initializing the express
var app=express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

// app.use(function(req,res,next){
// 	var currentDate=new Date().toString();
// 	var log=`${currentDate} : ${req.method} : ${req.url}`;
// 	console.log(log);
// 	fs.appendFileSync('server.log', log + '\n');

// 	next();
// });

// app.use((req,res,next)=>{
// 	res.render('maintenance.hbs');
// });

//hbs functions to be used inside the .hbs or html files.
hbs.registerHelper('getCurrentYear',function(){
return new Date().getFullYear();
});
hbs.registerHelper('inCaps',function(text){
	return text.toUpperCase();
})

app.get('/',function(req,res){
	res.render('home.hbs',{
		title:'Home Page',
		headingContent:'HOME PAGE',
		para:"Some text in Home page."	
	});
});

app.get('/about',function(req,res){
	res.render('about.hbs',{
		title:'About',
		headingContent:'ABOUT ME',
		para:"About par"
	});
});

//sending an json object
app.get('/bad',function(req,res){
	res.send({
		error:'Somethings Wrong Bud'
	});
});

//port is dynamically provided by heroku ,locally it is 3000.	
app.listen(port);
console.log(`Server Started on port ${port} `);