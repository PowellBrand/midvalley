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
    getServiceFee: (req, res)=> {
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
    getLateral: (req, res)=> {
        const db = req.app.get('db');      
        db.getLateral().then((result) => {
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    }
}