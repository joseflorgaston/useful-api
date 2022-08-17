const { Router } = require('express')

const router = Router()

// Initialize Controller
const {
  getTermsAndConditions,
} = require('../../../controllers/mowi/onboarding/termsAndConditions.controller')

// Get All
router.get('/basescondiciones', getTermsAndConditions)

module.exports = router