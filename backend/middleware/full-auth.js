const { isTokenValid } = require('../utils/jwt');

const authenticateUser = async (req, res) => {
    let token;

    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
    }
    else if(req.cookies.token) {
        token = req.cookies.token;
    }

    if(!token) {
        throw new Error('Authentication Invalid');
    }
    try {
        const payload = isTokenValid(token);

        req.user = {
            userId: payload.user.userId,
            role: payload.user.role,
        };
        next();
    } catch (error) {
        throw new Error('Authentication Invalid');
    }
};

const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            throw new Error('Unauthorized to access this route')
        }
        next();
    }
};

module.exports = {
    authenticateUser,
    authorizeRoles
}