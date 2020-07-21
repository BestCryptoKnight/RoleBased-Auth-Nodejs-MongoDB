# RoleBased-Auth-Nodejs-MongoDB

# Introduction

This is a backend template for Role based authentication which is created by using nodejs, epxress, jwt and mongoDB.
It is perfect fit for creating a Customer management system using nodejs-backend or reactjs-frontend.

# Created By

---

    Name: Bhasin Neeraj
    Email: nkbhasin28@gmail.com

---

# Project File Structure

| File                       |            Details(contains)            |
| -------------------------- | :-------------------------------------: |
| congif.json                |      mongoDB Url, JWT private key       |
| helpers/db.js              |    contains the monogoDB connection     |
| helpers/errorHandler.js    |              global errors              |
| helpers/jwt.js             |    authenticates the token and role.    |
| helpers/role.js            |     contains the roles(Admin, User)     |
| services/user.services.js  | all methods that perform crud operation |
| routes/user.controllers.js |      routes to all crud operations      |

# Project Images Using Postman

#### Register new User

![alt text][logo]

[logo]: https://github.com/n-bhasin/RoleBased-Auth-Nodejs-MongoDB/blob/master/documents/register.png "Register new user"

#### Authenticate user

![alt text][logo]

[logo]: https://github.com/n-bhasin/RoleBased-Auth-Nodejs-MongoDB/blob/master/documents/authenticate/authenticate.png "Authenticate user"

#### Current user

![alt text][logo]
[logo]: https://github.com/n-bhasin/RoleBased-Auth-Nodejs-MongoDB/blob/master/documents/current.png "Current user"

#### Unauthorized Access

[![Unauthorized Access](/documents/unauthorized.png)

# Instructions

    1. clone the repo
    2. install npm packages-> npm install
    3. run the app.js-> node app.js
    4. use the postman to test the app
