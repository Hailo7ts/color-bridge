const express = require('express')
const paintController = require('../controllers/paintController')
const router = express.Router()


router
    .route('/')
    .get(paintController.getHomePage)

router  
    .route('/addPaint')
    .get(paintController.addPaintPage)
    .post(paintController.addPaint)

router 
    .route('/convert')
    .get(paintController.getConvertPage)

router  
    .route('/match')
    .get(paintController.getMatchPage)
    .post(paintController.addMatch)

/*router 
    .route('/match')
    .get(paintController.getMatchPage)*/


    

module.exports = router;