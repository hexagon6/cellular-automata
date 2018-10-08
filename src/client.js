import { Store } from 'svelte/store.js'
import * as sapper from '../__sapper__/client.js'

// `routes` is an array of route objects injected by Sapper
sapper.start({
  target: document.querySelector('#sapper'),
  store: data => new Store(data),
})

if (module.hot) module.hot.accept()
