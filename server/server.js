const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , dotenv = require('dotenv').config()
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , axios = require('axios')
    

const path = require('path');

const app = express();

const controller = require('./controller/controller');

//bodyParser middleware from bodyparser github repo
app.use(bodyParser.json());
var jsonParser = bodyParser.json()

app.use(cors());
//--------------------END-------------------------//




// ------------- End Points ------------- //

app.put('/upload/agenda', controller.agenda);
app.get('/agenda', controller.getAgenda)
app.put('/upload/meeting', controller.meeting);
app.get('/meeting', controller.getMeeting);
// app.put('/api/service', controller.service);
// app.put('/api/sewer_lat', controller.sewer_lat);
// app.put('/api/sewer_rate', controller.sewer_rate);
// app.put('/api/budget_doc', controller.budget_doc);
// app.put('/api/budget_sum', controller.budget_sum);

// ------------ End End points ------------ //

massive(process.env.CONNECTION).then(db => {
    app.set('db', db);
}).catch(console.error);

app.listen(process.env.PORT, () => {
    console.log(`I'm chugging along here on port: ${process.env.PORT}.`)
})