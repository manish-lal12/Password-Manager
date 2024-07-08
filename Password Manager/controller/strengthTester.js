const zxcvbn = require('zxcvbn')
const { StatusCodes } = require('http-status-codes');

const passwordStrengthTester = async (req, res) => {
    const { password } = req.body;
    const { 
        sequence,
        crack_times_display : { offline_slow_hashing_1e4_per_second }, 
        score,
        feedback: { warning, suggestions }
        } = zxcvbn(password);

    if (sequence.length<=1 && sequence[0].pattern === 'bruteforce') {
        return res.status(StatusCodes.OK).json({
            strength: {Time_to_crack: offline_slow_hashing_1e4_per_second, 
            password_score: score,
            feedback: 'Strong password, difficult to crack'
            }});  
    }

    res.status(StatusCodes.OK).json({
                                    strength: {Time_to_crack: offline_slow_hashing_1e4_per_second, 
                                    password_score: score,
                                    warning: warning,
                                    feedback: suggestions[0] + suggestions[1]
                                    }});
}

module.exports = passwordStrengthTester ;