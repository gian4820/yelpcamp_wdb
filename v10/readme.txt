		#NO DEMON
*Instalamos npm i -D nodemon
*Luego abrimos el package.json y donde dice scripts le agregamos esta linea
"start": "nodemon app.js"


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

#Instalamos los paquetes necesarios...
*npm install passport passport-local passport-local-mongoose express-session --save

#Authentication 1 - Add user model
*Define User model


#Authentication 2 - Register
*Configure Passport
*Add register routes
*Add Register templates


#Authentication 3 - Login
*Add login routes
*Add login template

#Authentication 4 - LogOut/Navbar
*Add logout route
*Prevent user from adding comment if is not logged in
*Add links to navbar
*Show/hide auth links correctly

#Authentication 5 - Show / Hide Links
-Show / Hide links en navbar correctly

-----------CAPITULO 36 CLEANING UP---------------------------

#Refactor the Routes
*Use express router to reorganize all routes


#Users + Comments
*Associate users and comments
*Save authors name to a comment automaticaly


#User + Campgrounds
*Prevent an unaunthenticated user from creating a campground
*Save username + id to newly created campground 

-----------CAPITULO 37 UPDATE AND DESTROY-------------------

#Deleting Campgrounds
*Add destroy routes
*Add delete button


#Authorization
*User can only edit his/her campgraound
*User can only delete his/here campground
*Hide/show edit and delete button

#Users + Campgrounds
*Prevent an unauthenticated user from creating campgrounds
*Save username+id  to newly created campground


#Editing Campgrounds
*Add method-override
*Add edit-route for campgrounds
*Add link to edit page
*Add update route


#Deleting campgrounds
*Add destroy route
*Add delete button


#Authorization
*User can only edit his/her campgrounds
*User can only delete his her campgrounds
*Hide/show edit and delete button

#Editing Comments
*Add edit route for comments
*Add edit button
*Add update route


#Deleting Comments
*Add destroy route
*Add delete button

#Authorization part 2 Comments
*user can only edit his her comment
*			   delete
*hide show, edit and delete button
*refactor middleware


#Adding in Flash
*Demo Working Version
*Install and configure connect-flash
*Add bootstrap alert


