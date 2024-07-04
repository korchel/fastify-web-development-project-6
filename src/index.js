import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'dotenv/config'
import fastify from 'fastify';

const app = fastify({

  exposeHeadRoutes: false,

  logger: { target: 'pino-pretty' },
});


export default app;