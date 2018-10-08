import { init } from 'sapper/runtime.js'
import { Store } from 'svelte/store.js'

import { manifest } from './manifest/client.js'

// `routes` is an array of route objects injected by Sapper
init({
  target: document.querySelector('#sapper'),
  manifest,
  store: data => new Store(data),
})

if (module.hot) module.hot.accept()
