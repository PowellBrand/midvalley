const express = require('express')
, massive = require('massive')
, bodyParser = require('body-parser')
, cors = require('cors')
, dotenv = require('dotenv').config()
, session = require('express-session')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, axios = require('axios');
const path = require('path');

const app = express();

const controller = require('./controller/controller');

//bodyParser middleware from bodyparser github repo
app.use(bodyParser.json());
var jsonParser = bodyParser.json()

app.use(cors());
//--------------------END-------------------------//

massive(process.env.CONNECTION).then(db => {
    app.set('db', db);
}).catch(console.error);

app.listen(process.env.PORT, () => {
    console.log(`I'm chugging along here on port: ${process.env.PORT}.`)
})