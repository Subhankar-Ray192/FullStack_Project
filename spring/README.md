# SpringBoot

## SpringBoot Project Configuration::

1. Build--> Maven
2. Language --> Java v21
3. SpringBoot --> 3.2.5
4. Packaging --> Jar

## SpringBoot Dependencies:

1. Spring Web ::  Build web, inclduing RESTful applications using SpringMVC
2. Spring Data JPA:: Persist data in SQL stores plain JDBC using Spring Data

## SpringBoot Workflow:

The SpringBoot dependencies are downloaded in a ZIP folder, extracted, the
dependencies are available in the POM.XML file.

General: All packages are exclusive to the main\java\com\example\demo for java applications<br>
General: All static resources(HTML,CSS,JS) are exclusive to the main\resources\static

Database: All database configuration files are in application.properties file

Target: All the build application module in the form of Jar are stored & located in this folder

## Setting Java

```
set path="Java_21\bin"
java -jar target\<application>.jar
```

<br>
The SpringBoot Project Configuration:: (https://start.spring.io/)



# Maven

Maven is a build tool which is used to package all the external dependencies 
of our application into a single Jar file stored & located at the target folder

```
set path="Maven\apache-maven-3.9.6-bin\apache-maven-3.9.6\bin"
set JAVA_HOME="Java_21"

mvn -v
mvn clean package
```

The mvn clean package is used to rebuild from scratch all the downloaded dependencies
& also re-package it into a single Jar file located at the target folder

# Postgres

Postgres is a RDBMS which is utilised and initialized with a set of intial
tables

```
<path>\bin\psql.exe -U postgres

\? :: Help

\l
\c <Database>
\d <Table> 
```

This is the terminal SQL in Postgresql which will be used to check the validity
of the database and the required information that has to be fed to the application.properties file
in main\src

