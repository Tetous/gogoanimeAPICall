const express = require('express');
const router = require('./routes/index');
const app = express();
const { authorization } = require('./function');
//const axios = require('axios');
//const { recentreleasedseries } = require('../src/config');

const PORT = process.env.PORT || 3000;

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