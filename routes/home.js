const express = require('express')
const router = express.Router()
const homeController = require()

router.get('/', homeController.getIndex)
router.post('/new', homeController.createItem)

module.exports = router