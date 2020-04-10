const jwt = require('jsonwebtoken');

const authenticate = (req,res,next) => {
    try{
        const token  = req.headers.authorization.split(' ')[1];
        console.log(token);
        req.user = jwt.verify(token, 'SECRET')
        next();
    }catch (err) {
        res.json({
            message : 'authentication failed'
        })
    }
}
module.exports = authenticate ;