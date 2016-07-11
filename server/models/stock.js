'use strict';

require('dotenv').load();

const mongoose    = require('mongoose');
const moment      = require('moment');
const Request     = require('request');
const ObjectId    = mongoose.Schema.Types.ObjectId;

let stockSchema = new mongoose.Schema({
    Status: {type : String},
    Name: {type : String},
    Symbol: {type : String},
    LastPrice: {type : Number},
    Change:{type : Number},
    ChangePercent: {type : Number},
    Timestamp: {type : String},
    MSDate: {type : Number},
    MarketCap: {type : Number},
    Volume: {type : Number},
    ChangeYTD: {type : Number},
    ChangePercentYTD: {type : Number},
    High: {type : Number},
    Low: {type : Number},
    Open: {type : Number},
});

stockSchema.statics.getQuote = (reqBody, cb) => {
  console.log('reqBody: ', reqBody);
  Request.get(`http://dev.markitondemand.com/Api/v2/Lookup/json?input=${reqBody.symbol}`, (err, res, body)=>{
    if(err) cb(err);
    let symbol = JSON.parse(body)[0].Symbol
    Request.get(`http://dev.markitondemand.com/Api/v2/Quote/json?symbol=${symbol}`, (err, res, body)=>{
      err ? cb(err) : cb(null, JSON.parse(body));
    });
  });
};

let Stock = mongoose.model('Stock', stockSchema);
module.exports = Stock;
