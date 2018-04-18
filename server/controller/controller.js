module.exports = {

    agenda: (req,res)=>{
        let {agenda} = req.body;

        req.app.get('db').addAgenda([agenda]).then(user=>{
            res.send(user[0]);
        }).catch(e=>console.log(e))
    },
    
    meeting: (req,res)=>{
        let {meeting} = req.body;

        req.app.get('db').addMeeting([meeting]).then(user=>{
            res.send(user[0]);
        }).catch(e=>console.log(e))
    },
    
    service: (req,res)=>{
        let {service} = req.body;

        req.app.get('db').addService([service]).then(user=>{
            res.send(user[0]);
        }).catch(e=>console.log(e))
    },
    
    sewer_lat: (req,res)=>{
        let {sewer_lat} = req.body;

        req.app.get('db').addSewerLat([sewer_lat]).then(user=>{
            res.send(user[0]);
        }).catch(e=>console.log(e))
    },
    
    sewer_rate: (req,res)=>{
        let {sewer_rate} = req.body;

        req.app.get('db').addSewerRate([sewer_rate]).then(user=>{
            res.send(user[0]);
        }).catch(e=>console.log(e))
    },
    
    budget_doc: (req,res)=>{
        let {budget_doc} = req.body;

        req.app.get('db').addBudgetDoc([budget_doc]).then(user=>{
            res.send(user[0]);
        }).catch(e=>console.log(e))
    },
    
    budget_sum: (req,res)=>{
        let {budget_sum} = req.body;

        req.app.get('db').addBudgetSum([budget_sum]).then(user=>{
            res.send(user[0]);
        }).catch(e=>console.log(e))
    }

}