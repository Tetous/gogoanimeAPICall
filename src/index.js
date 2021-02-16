const express = require('express');
const router = require('./routes/index');
const app = express();
const { authorization } = require('./function');
//const axios = require('axios');
//const { recentreleasedseries } = require('../src/config');

const PORT = process.env.PORT || 3000;

app.use('/uptime', (req, res) => {
    let time = process.uptime();
    let uptime = (time + "").toHHMMSS();
    res.send({
        uptime
    });
})

app.use('/api', authorization, router);

const listener = app.listen(PORT, () => {
    console.log(`The app is running on port ${listener.address().port}`);
});

// setTimeout(() => {
//     fetch();
// }, 10000);
//
// async function fetch() {
//     let link = await axios.get(recentreleasedseries);
//     loop();
// }
//
// function loop() {
//     setTimeout(() => {
//         fetch()
//     }, 10000);
// }

String.prototype.toHHMMSS = function () {
    let sec_num = parseInt(this, 10); // don't forget the second param
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    let time    = hours+':'+minutes+':'+seconds;
    return time;
}