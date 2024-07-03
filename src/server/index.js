import fastify from 'fastify';
import view from '@fastify/view';
import pug from 'pug';
import formbody from '@fastify/formbody';
import addRoutes from './routes/index.js';

export default async (app, options) => {


  await app.register(view, { engine: { pug } });
  await app.register(formbody);


  addRoutes(app);

  return app;
};