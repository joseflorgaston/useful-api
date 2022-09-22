const { Router } = require('express')

const router = Router()

// Initialize Controller
const {
  getTermsAndConditions,
  get400StatusCode,
  get401StatusCode,
  get403StatusCode,
  get500StatusCode
} = require('../../../controllers/mowi/onboarding/termsAndConditions.controller')

// Get All
router.get('/basescondiciones', getTermsAndConditions)
router.get('/400Error', get400StatusCode)
router.get('/401Error', get401StatusCode)
router.get('/403Error', get403StatusCode)
router.get('/500Error', get500StatusCode)

module.exports = router