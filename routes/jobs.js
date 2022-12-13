
const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

//teste


//adcionar o job
router.post(
    '/add', (req, res)=>{
        let {
            title,
            salary,
            company,
            description,
            email,
            new_job
        } = req.body;

        //inserir
        Job.create(
            {
                title,
                description,
                salary,
                company,
                email,
                new_job
            }
        )

        //direcionando para home
        .then(
            ()=> res.redirect('/')
        )
        .catch(err => console.log(`Ocorreu algum erro: ${err}`));
    }

);

module.exports = router