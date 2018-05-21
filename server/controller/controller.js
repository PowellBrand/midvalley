module.exports = {

    agenda: (req, res) => {
        const db = req.app.get('db');
        const { agendaURL } = req.body
        db.addAgenda(agendaURL).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },

    getAgenda: (req, res) => {
        const db = req.app.get('db');

        db.getAgenda().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    },
    meeting: (req, res) => {
        const db = req.app.get('db');
        const { meetingURL } = req.body
        db.addMeeting(meetingURL).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    getMeeting: (req, res) => {
        const db = req.app.get('db');
        db.getMeeting().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    },

    opBudgetSum: (req, res) => {
        const db = req.app.get('db');
        const { opBudgetSumURL } = req.body
        db.addOpBudgetSum(opBudgetSumURL).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    getOpBudgetSum: (req, res) => {
        const db = req.app.get('db');
        db.getOpBudgetSum().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    },
    opBudgetDoc: (req, res) => {
        const db = req.app.get('db');
        const { opBudgetDocURL } = req.body
        db.addOpBudgetDoc(opBudgetDocURL).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    getOpBudgetDoc: (req, res) => {
        const db = req.app.get('db');
        db.getOpBudgetDoc().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    },

    sewerRate: (req, res) => {
        const db = req.app.get('db');
        const { sewerRateURL } = req.body
        db.addSewerRate(sewerRateURL).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    getSewerRate: (req, res) => {
        const db = req.app.get('db');
        db.getSewerRate().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    },
    serviceFee: (req, res) => {
        const db = req.app.get('db');
        const { serviceFeeURL } = req.body
        db.addServiceFee(serviceFeeURL).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    getServiceFee: (req, res) => {
        const db = req.app.get('db');
        db.getServiceFee().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    },
    lateral: (req, res) => {
        const db = req.app.get('db');
        const { lateralURL } = req.body
        db.addLateral(lateralURL).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    getLateral: (req, res) => {
        const db = req.app.get('db');
        db.getLateral().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    },

    construction: (req, res) => {
        const db = req.app.get('db');
        const { constructionURL } = req.body
        db.addConstruction(constructionURL).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    getConstruction: (req, res) => {
        const db = req.app.get('db');
        db.getConstruction().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    },
    standardDraw: (req, res) => {
        const db = req.app.get('db');
        const { standardDrawURL } = req.body
        db.addStandard(standardDrawURL).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    getStandard: (req, res) => {
        const db = req.app.get('db');
        db.getStandard().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    },
    development: (req, res) => {
        const db = req.app.get('db');
        const { developURL } = req.body
        db.addDevelopment(developURL).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    getDevelopment: (req, res) => {
        const db = req.app.get('db');
        db.getDevelopment().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    },
    impact: (req, res) => {
        const db = req.app.get('db');
        const { impactURL } = req.body
        db.addImpact(impactURL).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    },
    getImpact: (req, res) => {
        const db = req.app.get('db');
        db.getImpact().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    },

    setUser: (req, res, next) => {
        if (req.user && !req.session.user) {
            req.session.user = req.user;
        }
        res.redirect('/');
    },

    sendUserToClient: (req, res, next) => {
        if (!req.session.user) {
            res.status(403).send();
        } else {
            res.status(200).send(req.session.user);
        }
    },

    logout: (req, res) => {
        req.logOut();
        res.redirect(process.env.REACT_APP_REDIRECT)
    }
}