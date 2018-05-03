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

app.put('/upload/opBudgetSum', controller.opBudgetSum);
app.get('/opBudgetSum', controller.getOpBudgetSum)

app.put('/upload/opBudgetDoc', controller.opBudgetDoc);
app.get('/opBudgetDoc', controller.getOpBudgetDoc)

app.put('/upload/sewerRate', controller.sewerRate);
app.get('/sewerRate', controller.getSewerRate)

app.put('/upload/serviceFee', controller.serviceFee);
app.get('/serviceFee', controller.getServiceFee);

app.put('/upload/lateral', controller.lateral);
app.get('/lateral', controller.getLateral)


// ------------ End End points ------------ //

massive(process.env.CONNECTION).then(db => {
    app.set('db', db);
}).catch(console.error);

app.listen(process.env.PORT, () => {
    console.log(`I'm chugging along here on port: ${process.env.PORT}.`)
})