#NO DEMON
*Instalamos npm i -D nodemon
*Luego abrimos el package.json y donde dice scripts le agregamos esta linea
"start": "nodemon app.js"
--------------------------------------------------------------------


STYLE THE CAMPGROUND PAGE
*Add a better header /// title with Bootstrap
*Make campgrounds display in a grid

STYLE THE NAVBAR AND FORM
*Add a navbar to all templates
*Style the new campground form

ADD MONGOOSE
*Install and configure mongoose  -> npm install mongoose --save
*Setup campground model
*Use campground model inside of our routes

COMANDOS MONGODB
*Consola mongo: mongo
*Mostrar dbs: show dbs
*Para usar una db: use ***   (donde el asterisco es el nombre de la base)
*Mostrar colecciones: show collections
*Para ver lo que tiene: db.***.find()

SHOW PAGE
*Review the RESTful routed we have seen so far
*Add description to our campgrounds model
*Show db.collection.drop()
*Add a show route/template


#REFACTOR MONGOOSE MODEL
*Create a models directory
*Use moodule.exports
*Require evereything correctly










DIAGRAMA DE WEB

NAME		URL			VERB		DESC
==================================================================
*index	  /campgrounds   GET		Muestra lista de campgrounds
*new    /campgrounds/new GET		Muestra formulario para crear campgrounds
*create   /campgrounds   POST		Agrega un nuevo camprground a la base
*show  /campgrounds/:id  GET		Muestra el campground seleccionado

-------------------------------------------------------------------------------------
*new campgrounds/:id/comments/new		GET
*create campgrounds/:id/comments		POST

-------------------------------------------------------------------------------------

#INTRODUCCION 
*Explica Rest, y porque es tan importante
*Lista las 7 restful routes
*Show Examples of restful routing in practice

#BLOG Index
*Setup de Blog App
*Create the Blog Model
*Add index route and template

#BASIC LAYOUT
*Add header and footer partials
*Include Semantic UI
*Add simple navls

#PUTTING THE C in Crud
*Add a new Route
*Add a new Template
*Add create route
*Add create templtate


#SHOWtime
*Add show route
*Add show template
*Add links to show page
*Style show template


#EDIT/UPDATE
*Add edit route
*Add edit form
*Add update route
*Add update form
*Add method-override  --> npm install method-override --save


#DELETE
*Add destroy route
*Add Edit and destroy links

#FINAL UPDATES
*Sanitize Blog body	->	npm install express-sanitizer --save
*Style Index
*Update rest table

 #AUTHENTICATION
 *What tools are we using?
 	*Passport
	*Local Passport
	*Passport local mongoose
*Walk throw authentication flow
*Discuss sesion
	*Express-session
	
	
#Auth Code Along part 1
*Set up folder structure
*Install needed package
*Add root route and templates
*Add secret route and template




