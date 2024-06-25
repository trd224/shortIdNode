const express = require("express");
const router = express.Router();
const {generateNewShortUrl, visitShortUrl} = require("../controllers/url")

router.post("/", generateNewShortUrl);
router.get("/:shortId", visitShortUrl)

module.exports = router;