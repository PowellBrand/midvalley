module.exports = {

    agenda: (req, res) => {
        const db = req.app.get('db');
        const { agenda } = req.body
        db.addAgenda(agenda).then(() => {
            res.status(200).send()
        }).catch(() => res.status(500).send())
    }

}