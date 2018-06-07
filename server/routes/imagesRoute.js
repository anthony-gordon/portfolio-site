const express = require('express')
const router = express.Router()
var imagesDb = require('../db')

router.get('/', (req, res) => {
    let db = req.app.get('db')
    imagesDb.getImages(db)
      .then(images => {
        res.json(images)
      })
  })

router.post('/', (req, res) => {
    let db = req.app.get('db')
    console.log("in post")
    imagesDb.addImage(req.body, db)
            .then(user => res.json(user))
        .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))  
})

module.exports = router