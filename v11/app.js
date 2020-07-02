var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
	flash 		= require("connect-flash"),
	passport	= require("passport"),
	LocalStrategy = require("passport-local"),
	methodOverride = require("method-override"),
    Campground  = require("./models/campground"),
	Comment		= require("./models/comment"),
	User 		= require("./models/user"),
    seedDB      = require("./seeds")
    
//**************REQUERING ROUTES*******************************
//aca le decimos que haga referencia a los demas js que separamos segund su seccion
var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require ("./routes/index");


mongoose.connect("mongodb://localhost/yelp_camp_v7");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();



//**************PASSPORT CONFIGURATION**************************
app.use(require("express-session")({
	secret: "Meme la mejor",
	resave: false,
	saveUninitialized: false
}));


//*********************METODOS PASSPORT*************************
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Middleware para repetir el currentUser en todas las paginas
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash ("error");
	res.locals.success = req.flash ("success");

	next();
});

//aca le decimos a express que utilize estas tres rutas que hicimos en el require
app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);



//**********************SERVER LISTENING****************************


//Configuracion para conexion afuera puerto 3000
app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("==================================");
	console.log("The Yelp Camp Server is Listening");
	console.log("==================================");
});
