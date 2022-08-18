const { Router } = require('express')

const router = Router()

// Initialize Controller
const {
  sendEmail,
} = require('../../controllers/portfolio/SendEmail.controller')

// Get All
router.post('/sendEmail', sendEmail)

module.exports = router