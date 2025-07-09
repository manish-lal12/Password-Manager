const { isTokenValid } = require('../utils');

const authenticateUser = async (req, res, next) => {
    const token = req.signedCookies.token;
    if(!token) {
        throw new Error('Authentication Invalid');
    }

    try {
        const { name, userId, role } = isTokenValid(token);
        req.user = { name, userId, role };
        next();
    } catch (error) {
        console.log(error);
    }
};

const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw Error('Unauthorized to access this route');
        }
        next();
    }
};

module.exports = {
    authenticateUser,
    authorizePermissions
}