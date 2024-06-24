const randomPasswordGenerator = require('generate-password-browser');
const {StatusCodes} = require('http-status-codes');

const passwordGenerator = async (req, res) => {

    const randomPassword = randomPasswordGenerator.generate({
                                            length: 16,
                                            numbers: true,
                                            symbols: true   
    })

    res.status(StatusCodes.OK).json({ password: randomPassword });
}

module.exports = passwordGenerator;