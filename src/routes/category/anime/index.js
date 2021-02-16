const router = require('express').Router();
const api = require('./api/functions');
const fs = require('fs');
const { dirname } = require('path');

router.get('/search/:query', async(req, res) => {
    let query = req.params.query;

    api.search(query).then(search => {
        res.status(200).json({
            search
        });
    });
});

router.get('/recentreleasedseries/:page', (req, res) => {
    const page = parseInt(req.params.page, 10);


    api.recentReleaseEpisodes(page).then(data => {
        res.status(200).json({
            data
        });

        recentReleaseNotification(data);
    });
});

async function recentReleaseNotification(data) {
    let dir = __dirname+'/../../../../database/recentRelease.json';
    let dataDB = JSON.parse(fs.readFileSync(dir, {encoding: 'utf8'}));

    if(dataDB.uri != data[0].uri) {

        dataDB = data[0];

        fs.writeFile(dir, JSON.stringify(dataDB), (err) => {
            if(err) console.log(err);
        });

        console.log('New anime has been added');
    }
}

module.exports = router;