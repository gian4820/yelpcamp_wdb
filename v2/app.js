var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser:true});  //yelp_camp es el nombre de la base de datos, si no existe ese nombre la crea.
app.use(bodyParser.urlencoded({extended: true}));  //aca le decimos a express que utilice bodyParser
app.set("view engine", "ejs");  //esto sirve para no escribir el .ejs cuando llamamos a las paginas .ejs por ej landing.ejs

//*********************SCHEMA SETUP***************************

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
})


//************************************************************


//CREAMOS EL MODELO
var Campground = mongoose.model("Campground", campgroundSchema); 

// Campground.create({
	
// 	name: "Los Gigantes",
// 	image: "https://cdn.pixabay.com/photo/2017/07/17/16/21/nature-2512944__340.jpg"
// },
// 	function(err, campground){
// 	if (err){
// 		console.log("Hay un error");
// 		console.log(err);
// 	}
// 	else{
// 		console.log("=======================");
// 		console.log("New Campground Creted!");
// 		console.log("=======================");
// 		console.log(campground);
// 	}
// });

//**************************LANDING********************************


app.get("/", function(req, res){
	res.render("landing");
})


//***********************MUESTRA INDEX*********************************

app.get("/campgrounds", function(req, res){
	//Get all campgrounds from the db
	Campground.find({}, function(err, allCampgrounds){
		if (err){
			console.log("Hay un error!");
		}
		else{
			res.render("index", {campgrounds: allCampgrounds}); 
		}
	})
	
})

//*********************CARGA NUEVO CAMPRGROUND*************************

app.post("/campgrounds", function(req, res){  //aca se llama igual que el get de arriba, pero no interfiere porque 
	//uno es get y el otro es post
	//instalamos npm install body-parser --save
		
	
	// En estas variables, almacenamos lo que tiene en el formulario del nuevo campground
	var name = req.body.name; 
	var image = req.body.image;
	var desc = req.body.description;
	
	// aca creamos un nuevo objeto newCampgrounds, donde vamos almacenar todas las nuevas imagenes y textos agregados, y lo añadimos con push al 		array
	var newCampgrounds = {name: name, image: image, description: desc}
	//Create a new campground and save it in the db
	Campground.create(newCampgrounds, function(err, newlyCreated){
		if (err){
			console.log(err);
		}
		else{
			//despues de agregar el nuevo push, te redirecciona a campgrounds
			res.redirect("/campgrounds");
		}
	});
	
});

//*****************FORMULARIO DE CARGA**********************************

app.get("/campgrounds/new", function(req, res){
	res.render("new");
})

//*********************BUSCA ID DE CAMPGROUND**************************


app.get("/campgrounds/:id", function(req, res){
	//busca el id del campgrounds
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log("hubo un error");
			console.log(err);
		}
		else{
			res.render("show", {campground: foundCampground});
		}
	});
		
})


//**********************************************************************


//Configuracion para conexion afuera puerto 3000
app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("==================================")
	console.log("The Yelp Camp Server is Listening");
	console.log("==================================")
})