import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import userRouter from './api/user/router.js';
import laptopRouter from './api/laptop/router.js';
import orderRouter from './api/order/router.js';
import pcRouter from './api/pc/router.js';
import processorRouter from './api/parts/processor/router.js';
import mouseRouter from './api/parts/mouse/router.js';
import keyboardRouter from './api/parts/keyboard/router.js';
import displayRouter from './api/parts/display/router.js';
import fileRouter from './api/file/router.js';
import ramRouter from './api/parts/ram/router.js';
import authRouter from './api/auth/router.js';
import { setDBData } from './dbDefault/index.js';
import { authentication } from './utils/jwt generate.js';

mongoose.connect('mongodb+srv://grnostyle:BnLVkPcsDefcd3Zo@test.p5mbm.mongodb.net/test?retryWrites=true&w=majority');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/auth', authRouter);
app.use(authentication);
app.use('/user', userRouter);
app.use('/laptop', laptopRouter);
app.use('/order', orderRouter);
app.use('/pc', pcRouter);
app.use('/processor', processorRouter);
app.use('/mouse', mouseRouter);
app.use('/keyboard', keyboardRouter);
app.use('/display', displayRouter);
app.use('/ram', ramRouter);
app.use('/img', fileRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.setHeader('Content-Type', 'application/json');

  res.status(500).send({
    status: 'server error',
    message: err.message,
  });
});

async function init() {
  await setDBData();
}
init().then(() => {
  console.log('The project is inited');
});

export default app;
