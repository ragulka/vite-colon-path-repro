const result = document.querySelector('#result')

import('./route:name/index.js')
  .then((mod) => (result.textContent = `loaded: ${mod.name}`))
  .catch((error) => (result.textContent = `failed: ${error.message}`))
