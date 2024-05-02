# SpringBoot

## SpringBoot Project Configuration::

1. Build--> Maven
2. Language --> Java v21
3. SpringBoot --> 3.2.5
4. Packaging --> Jar

## SpringBoot Dependencies:

1. Spring Web ::  Build web, inclduing RESTful applications using SpringMVC
2. Spring Data JPA:: Persist data in SQL stores plain JDBC using Spring Data


(https://start.spring.io/)

## SpringBoot Workflow:

The SpringBoot dependencies are downloaded in a ZIP folder, extracted, the
dependencies are available in the POM.XML file.

General: All packages are exclusive to the main\java\com\example\demo for java applications<br>
General: All static resources(HTML,CSS,JS) are exclusive to the main\resources\static

Database: All database configuration files are in application.properties file

Target: All the build application module in the form of Jar are stored & located in this folder

## Setting Java

1. Ensure that the terminal path has been set to the Java\bin folder

2. After completing the build operations of the total application, execute this command:: `java -jar target\<application>.jar`


  