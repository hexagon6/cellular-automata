import polka from 'polka'
import compression from 'compression'
import sapper from 'sapper'
import serve from 'serve-static'
import { Store } from 'svelte/store.js'
import { routes } from './manifest/server.js'
import App from './App.html'

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    serve('assets'),
    // authenticationMiddleware(), // TODO: implement user session handling
    sapper({
      routes,
      App,
      store: request => {
        return new Store({
          user: request.user,
        })
      },
    })
  )
  .listen(process.env.PORT)
