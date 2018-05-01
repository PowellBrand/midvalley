const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , dotenv = require('dotenv').config()
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , axios = require('axios')
    , flash = require('express-flash');

const path = require('path');

// multer config //
// const multer = require('multer');
// const upload = multer({ storage: multer.memoryStorage() })
// end multer config //

const app = express();
app.use(flash());

const controller = require('./controller/controller');

//bodyParser middleware from bodyparser github repo
app.use(bodyParser.json());
var jsonParser = bodyParser.json()

app.use(cors());
//--------------------END-------------------------//




// ------------- End Points ------------- //

app.put('/upload/agenda', controller.agenda);
app.post('/api/meeting', controller.meeting);
app.post('/api/service', controller.service);
app.post('/api/sewer_lat', controller.sewer_lat);
app.post('/api/sewer_rate', controller.sewer_rate);
app.post('/api/budget_doc', controller.budget_doc);
app.post('/api/budget_sum', controller.budget_sum);

// ------------ End End points ------------ //

massive(process.env.CONNECTION).then(db => {
    app.set('db', db);
}).catch(console.error);

app.listen(process.env.PORT, () => {
    console.log(`I'm chugging along here on port: ${process.env.PORT}.`)
})