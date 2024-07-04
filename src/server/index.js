import fastify from 'fastify';
import path from 'path';
import { fileURLToPath } from 'url';
import fastifyStatic from '@fastify/static';
import view from '@fastify/view';
import pug from 'pug';
import formbody from '@fastify/formbody';
import addRoutes from './routes/index.js';


const __dirname = fileURLToPath(path.dirname(import.meta.url));


const setUpStaticAssets = (app) => {
  const pathPublic = path.join(__dirname, '..', 'dist');
  app.register(fastifyStatic, {
    root: pathPublic,
    prefix: '/assets/',
  });
};

export default async (app, options) => {

  setUpStaticAssets(app);
  await app.register(view, { engine: { pug } });
  await app.register(formbody);


  addRoutes(app);

  return app;
};