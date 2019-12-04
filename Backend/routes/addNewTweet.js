const express = require("express");
const router = express.Router();
var kafka = require("../kafka/client");

//Passport authentication
var passport = require('passport');
var jwt = require('jsonwebtoken');
var requireAuth = passport.authenticate('jwt', { session: false });

const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'info';

router.post("/addNewTweet", (req, res) => {
    console.log("Inside addNewTweet Post Request");
    console.log("Req Body : ", req.body);
    logger.info("addNewTweet backend start");
    kafka.make_request("addNewTweet_topic", req.body, function (err, results) {
        console.log("In make request call back");
        console.log(results);
        console.log(err);
        if (err) {
            console.log("Inside err");
            console.log(err);
            return res.status(err.status).send(err.message);
        } else {
            console.log("Inside else");
            console.log(results);
            logger.info("addNewTweet backend end");
            return res.status(results.status).send(results.message);
        }
    });
});

module.exports = router;
