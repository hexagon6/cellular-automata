import { init } from 'sapper/runtime.js'
import { Store } from 'svelte/store.js'

import { routes } from './manifest/client.js'

// `routes` is an array of route objects injected by Sapper
init(document.querySelector('#sapper'), routes, {
  store: data => {
    // `data` is whatever was in the server-side store
    return new Store(data)
  },
})

if (module.hot) module.hot.accept()
