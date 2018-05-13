import { init } from 'sapper/runtime.js'
import { Store } from 'svelte/store.js'

import { routes } from './manifest/client.js'
import App from './App.html'

// `routes` is an array of route objects injected by Sapper
init({
  target: document.querySelector('#sapper'),
  routes,
  App,
  store: data => new Store(data),
})

if (module.hot) module.hot.accept()
