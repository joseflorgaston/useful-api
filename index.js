const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
// Create express instance


// Init body-parser options (inbuilt with express)
app.use(express.json({ limit: 128000 }));
app.use(express.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Require & Import API routes
const termsAndConditions = require('./routes/mowi/onboarding/termsAndConditions.route');

// Use API Routes
// console.log(termsAndConditions.stack);

app.use('/api', termsAndConditions);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})