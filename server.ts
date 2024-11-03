import express from 'express';
import payload from 'payload';

require('dotenv').config();
const app = express();

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET ?? '',
    express: app,
  });

  app.listen(process.env.PORT ?? 3000, async () => {
    console.log(
      `Express is now listening for incoming connections on port ${process.env.PORT ?? 3000}.`,
    );
  });
};

start();
