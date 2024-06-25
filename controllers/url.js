const shortid = require("shortid");
const Url = require("../models/url");

async function generateNewShortUrl(req, res){
    const body = req.body;
    if(!body.redirectUrl) return res.status(400).json({error: 'url is required'})

    const shortID = shortid.generate()
    
    await Url.create({
        shortId: shortID,
        redirectUrl: body.redirectUrl,
        visitHistory: [] 
    })

    return res.json({id: shortID});
}

async function visitShortUrl(req, res){
    const shortId = req.params.shortId;
    const entry = await Url.findOneAndUpdate({
        shortId
    },{
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    })
    res.redirect(entry.redirectUrl);
}

module.exports = {
    generateNewShortUrl,
    visitShortUrl
}