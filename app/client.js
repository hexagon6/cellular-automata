import { init } from 'sapper/runtime.js'
import { routes } from './manifest/client.js'
import App from './App.html'

// `routes` is an array of route objects injected by Sapper
init({
	target: document.querySelector('#sapper'),
	routes,
	App,
})

if (module.hot) module.hot.accept()
