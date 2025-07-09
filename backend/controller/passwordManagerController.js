const PasswordManager = require('../models/PasswordManager');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const zxcvbn = require('zxcvbn');
const randomPasswordGenerator = require('generate-password-browser');
const cryptoJS = require('crypto-js');

const storePassword = async (req, res) => {
  req.body.user = req.user.userId; //passing userId using middleware to req.body
  const { name, password, user } = req.body;
  const doesDomainAlreadyExists = await PasswordManager.findOne({
    user: req.user.userId,
    name: name,
  });
  if (doesDomainAlreadyExists) {
    throw new CustomError.BadRequestError(
      'Password for domain already set'
    );
  }
  const record = await PasswordManager.create({
    name,
    password,
    user,
  });

  res.status(StatusCodes.CREATED).json({ record });
};

const showPassword = async (req, res) => {
  try {
    req.body.user = req.user.userId;

    const { name: domainName } = req.body;
    if (!domainName) {
      throw new CustomError.BadRequestError(
        'Please provide domain name'
      );
    }
    const record = await PasswordManager.findOne({
      user: req.body.user,
      name: domainName,
    });

    const encryptedPassword = record.password;
    const bytes = cryptoJS.AES.decrypt(
      encryptedPassword,
      process.env.ENCRYPTION_KEY
    );

    if (!bytes.sigBytes > 0) {
      throw new CustomError.UnauthenticatedError('Invalid key');
    }
    const decryptedPassword = bytes.toString(cryptoJS.enc.Utf8);

    const response = {
      id: record._id,
      name: record.name,
      password: decryptedPassword,
      user: record.user,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    };
    res.status(StatusCodes.OK).json({ response });
  } catch (error) {
    console.log(error);
  }
};

const showAllPasswords = async (req, res) => {
  req.body.user = req.user.userId;
  const records = await PasswordManager.find({ user: req.body.user });
  if (!records) {
    throw new CustomError.NotFoundError(
      'No records available for the user'
    );
  }
  res.status(StatusCodes.OK).json({ records });
};

const updatePassword = async (req, res) => {
  const userId = req.user.userId;
  const passwordId = req.params.id;
  const { name: domainName, newPassword } = req.body;
  if (!newPassword) {
    throw new CustomError.BadRequestError(
      'Please provide new password'
    );
  }

  if (!passwordId) {
    throw new CustomError.NotFoundError(
      `Record of password with id: ${passwordId} doesnot exist`
    );
  }

  const record = await PasswordManager.findOne({
    user: userId,
    _id: passwordId,
  });
  // const isPasswordSame = await record.comparePassword(newPassword);

  // if(isPasswordSame) {
  //     throw new CustomError.BadRequestError('New password should be different from old password');
  // }

  record.name = domainName;
  record.password = newPassword;

  await record.save();

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Password updated successfully' });
};

const deletePassword = async (req, res) => {
  const passwordId = req.params.id;

  const record = await PasswordManager.findOneAndDelete({
    _id: passwordId,
  });
  if (!record) {
    throw new CustomError.NotFoundError(
      `No record of password with id: ${passwordId}`
    );
  }

  res.status(StatusCodes.OK).json({ msg: 'Deleted successfully!!' });
};

const passwordStrengthTester = async (req, res) => {
  const { password } = req.body;
  const {
    sequence,
    crack_times_display: { offline_slow_hashing_1e4_per_second },
    score,
    feedback: { warning, suggestions },
  } = zxcvbn(password);

  if (sequence.length <= 1 && sequence[0].pattern === 'bruteforce') {
    return res.status(StatusCodes.OK).json({
      strength: {
        Time_to_crack: offline_slow_hashing_1e4_per_second,
        password_score: score,
        feedback: 'Strong password, difficult to crack',
      },
    });
  }

  res.status(StatusCodes.OK).json({
    strength: {
      Time_to_crack: offline_slow_hashing_1e4_per_second,
      password_score: score,
      warning: warning,
      feedback: suggestions[0] + suggestions[1],
    },
  });
};

const passwordGenerator = async (req, res) => {
  // const { name: domainName } = req.body;
  // const record = await PasswordManager.findOne({user: req.user.userId, name: domainName})

  const randomPassword = randomPasswordGenerator.generate({
    length: 10,
    numbers: true,
    symbols: true,
  });

  res.status(StatusCodes.OK).json({ password: randomPassword });
};

module.exports = {
  storePassword,
  updatePassword,
  deletePassword,
  showPassword,
  showAllPasswords,
  passwordStrengthTester,
  passwordGenerator,
};
