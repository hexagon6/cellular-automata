import polka from 'polka'
import compression from 'compression'
import serve from 'serve-static'
import { Store } from 'svelte/store.js'
import * as sapper from '../__sapper__/server.js'

const serverArgs = [
  compression({ threshold: 0 }),
  serve('static'),
  // authenticationMiddleware(), // TODO: implement user session handling
  sapper.middleware({
    store: request => {
      return new Store({
        user: request.user,
      })
    },
  }),
]

const { BASE_URL } = process.env
BASE_URL && serverArgs.unshift(BASE_URL)

polka() // You can also use Express
  .use(...serverArgs)
  .listen(process.env.PORT)
