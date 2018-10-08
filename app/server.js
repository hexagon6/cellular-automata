import polka from 'polka'
import compression from 'compression'
import sapper from 'sapper'
import serve from 'serve-static'
import { Store } from 'svelte/store.js'
import { manifest } from './manifest/server.js'

const serverArgs = [
  compression({ threshold: 0 }),
  serve('assets'),
  // authenticationMiddleware(), // TODO: implement user session handling
  sapper({
    manifest,
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
