require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

const connectDB = require('./db/db');

const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const PasswordManagerRouter = require('./routes/passwordManagerRoutes');
const passwordRouter = require('./routes/route');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust  proxy', 1);
// app.use(
//     rateLimiter({
//         windowMs: 15 * 60 * 1000,
//         max: 60,
//     })
// );

// app.use(helmet());
app.use(cors());
app.use(mongoSanitize());

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static('./public'));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/passwordManager', PasswordManagerRouter);
app.use('/api/v1/password', passwordRouter);

app.get('/api/v1', (req, res) => {
  console.log(req.signedCookies);
  res.send('test API');
});

//middewares (error and notFound)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
  });
};

start();
