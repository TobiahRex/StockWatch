'use strict';

const express = require('express');
const router = express.Router();
const Stock = require('../models/stock');

router.route('/')
.post((req, res)     => Stock.getQuote(req.body, res.handle));




module.exports = router;
