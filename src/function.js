require('dotenv').config();

module.exports = {
    authorization(req, res, next) {
        let headAuth = req.headers[`authorization`];
        if(headAuth !== process.env.Authorization){
            return res.send('Not authorized');
        }else {
            next();
        }
    }
}