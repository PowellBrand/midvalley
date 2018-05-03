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
            // console.log( "string",result)
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
            // console.log( "string",result)
            res.status(200).send(result)
        }).catch((e) => {
            console.log(e)
            res.status(500).send()
        })
    }

}