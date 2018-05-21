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

//Set up session and passport.
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
//--End session and passpot setup--//

//Auth0 Strategy
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: process.env.CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');

    let { displayName, user_id, email } = profile
    db.find_user([user_id]).then((users) => {
        //logged to console for testing//
        // console.log(users)
        ///////////////////////////////
        if (!users[0]) {
            db.create_user([
                displayName,
                email,
                user_id,
            ]).then(user => {

                return done(null, user[0].id)
            })
        } else {
            return done(null, users[0].id)
        }
    })

}))
//---End Strategy---//

//serialize and deserialize the user
passport.serializeUser((id, done) => {
    return done(null, id)
})
// passport.deserializeUser((user, done) => {
//     return done(null, user.userid)
// })
passport.deserializeUser((id, done) => {
    app.get('db').find_session_user([id])
        .then((user) => {
            return done(null, user[0])
        })
})

//Auth endpoints
app.get('/auth/login', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.REACT_APP_REDIRECT,
    failureRedirect: process.env.REACT_APP_REDIRECT
}))
app.get('/auth/me', (req, res) => {
    if (!req.user) {
        res.status(404).send('User not found');
    } else {
        res.status(200).send(req.user.admin)
    }
})
// app.post('/auth/logout', authController.logout);
app.get('/auth/logout', controller.logout)

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

app.put('/upload/construction', controller.construction)
app.get('/construction', controller.getConstruction)

app.put('/upload/standardDraw', controller.standardDraw)
app.get('/standardDraw', controller.getStandard)

app.put('/upload/develop', controller.development)
app.get('/development', controller.getDevelopment)

app.put('/upload/impact', controller.impact)
app.get('/impact', controller.getImpact)


// ------------ End End points ------------ //

massive(process.env.CONNECTION).then(db => {
    app.set('db', db);
}).catch(console.error);

app.listen(process.env.PORT, () => {
    console.log(`I'm chugging along here on port: ${process.env.PORT}.`)
})