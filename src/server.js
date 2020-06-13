import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
const { json } = require('body-parser');

import { config } from "dotenv";
config(); // https://github.com/sveltejs/sapper/issues/122

// import "./styles/core.scss"

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = polka() // You can also use Express
	.use(
		json(),

		compression({ threshold: 0 }),
		sirv('static', { dev }),

		// Setting default values and for debugging purposes
		// function(req, res, next) {
		//   // console.log('req.session.user:', req.session.user, 'token:',req.session.refresh_token);

		//   // if (typeof req.session.user === 'undefined') {
	 //    //    req.session.user = false;
		//   // }
		//   next()
		// },

		sapper.middleware({
      session: (req, res) => ({
				user: req.session && req.session.user
      })
    })
  )
  
console.log('PORT is', PORT)

app.listen(PORT, err => {
  if (err) console.log('error', err);
})
  
export default app.handler
