# spAng
spAng for SpringBoot & Angular.

An api to develop a full stack api with spring boot as REST api and angular/bootstrap front api. 

# How to install and run

git clone https://github.com/mgafsia/spAng.git

cd spang

mvn clean install

cd spAng\spAng-web\src\main\spAng-web

npm start


# Frameworks and technologies used :
-Node, npm & Angular CLI

-maven (parent module (spang), api REST module (spang-api) and angular web module(spang-web)) -  frontend-maven-plugin to build the Angular 2 application with Maven

-Angular 4 (Module , component , binding types, @input, @output, filter, events, animations,  ...)

-TypeScript

-RxJs (Observable, ...)

-Bootstrap 

-Configuration of proxy.conf.json to prevent "web browser violation of the Same Origin Policy"

-Spring boot (CRUD, ORM repository, ...)

-Swagger

-Flyway (data base migration source)



# Server used on spAng :
- Tomcat of springBoot

- H2 data base

# Useful commands :
- mvn clean install (on parent) 

- To add bootstrap to project add this entry on index.html file and add dist folder on src folder : 
  <!-- Bootstrap core JavaScript
      ================================================== -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.js"></script>
  <script src="../dist/js/bootstrap.min.js"></script>
  
  
- npm start (to start web server on angular project)


 
 


