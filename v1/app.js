var express = require("express");
var app = express();
var bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended: true}));  //aca le decimos a express que utilice bodyParser
app.set("view engine", "ejs");  //esto sirve para no escribir el .ejs cuando llamamos a las paginas .ejs por ej landing.ejs

var campgrounds = [
		{name: "Nono", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970__340.jpg"},
		{name: "Mina Clavero", image: "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg"},	
		{name: "Las Rabonas", image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201__340.jpg"},	
		{name: "Nono", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970__340.jpg"},
		{name: "Mina Clavero", image: "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg"},	
		{name: "Las Rabonas", image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201__340.jpg"},	
	];
	


app.get("/", function(req, res){
	res.render("landing");
})


//*****************************************

app.get("/campgrounds", function(req, res){
	
	res.render("campgrounds", {campgrounds: campgrounds}); 
	
})

///******************************************

app.post("/campgrounds", function(req, res){  //aca se llama igual que el get de arriba, pero no interfiere porque 
	//uno es get y el otro es post
	//instalamos npm install body-parser --save
		
	
	// En estas variables, almacenamos lo que tiene en el formulario del nuevo campground
	var name = req.body.name; 
	var image = req.body.image;
	
	// aca creamos un nuevo objeto newCampgrounds, donde vamos almacenar todas las nuevas imagenes y textos agregados, y lo añadimos con push al 		array
	var newCampgrounds = {name: name, image: image}
	campgrounds.push(newCampgrounds);
	
	//despues de agregar el nuevo push, te redirecciona a campgrounds
	res.redirect("/campgrounds");
})

//*******************************************

app.get("/campgrounds/new", function(req, res){
	res.render("new");
})






//*******************************************

//Configuracion para conexion afuera puerto 3000
app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("The Yelp Camp Server is Listening");
})