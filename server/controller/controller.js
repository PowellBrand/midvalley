module.exports = {

    agenda: (req, res) => {
        let { agenda } = req.body;

        req.app.get('db').addAgenda([agenda]).then(file => {
            res.send(file[0]);
        }).catch(e => console.log(e))
    },

    meeting: (req, res) => {
        let { meeting } = req.body;

        req.app.get('db').addMeeting([meeting]).then(file => {
            res.send(file[0]);
        }).catch(e => console.log(e))
    },

    service: (req, res) => {
        let { service } = req.body;

        req.app.get('db').addService([service]).then(file => {
            res.send(file[0]);
        }).catch(e => console.log(e))
    },

    sewer_lat: (req, res) => {
        let { sewer_lat } = req.body;

        req.app.get('db').addSewerLat([sewer_lat]).then(file => {
            res.send(file[0]);
        }).catch(e => console.log(e))
    },

    sewer_rate: (req, res) => {
        let { sewer_rate } = req.body;

        req.app.get('db').addSewerRate([sewer_rate]).then(file => {
            res.send(file[0]);
        }).catch(e => console.log(e))
    },

    budget_doc: (req, res) => {
        let { budget_doc } = req.body;

        req.app.get('db').addBudgetDoc([budget_doc]).then(file => {
            res.send(file[0]);
        }).catch(e => console.log(e))
    },

    budget_sum: (req, res) => {
        let { budget_sum } = req.body;

        req.app.get('db').addBudgetSum([budget_sum]).then(file => {
            res.send(file[0]);
        }).catch(e => console.log(e))
    }

    // fileUploadMiddleware: (req, res) => {
    //     cloudinary.uploader.upload_stream((result) => {
    //         axios({
    //             url: '/api/upload',
    //             method: 'post',
    //             data: {
    //                 url: result.secure_url,
    //                 name: req.body.name,
    //                 description: req.body.description,
    //             },
    //         }).then((response) => {
    //             res.status(200).json(response.data.data);
    //         }).catch((error) => {
    //             res.status(500).json(error.response.data);
    //         })
    //     }).end(req.file.buffer)
    // }

}