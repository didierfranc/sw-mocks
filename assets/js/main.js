import { register } from 'https://s3.eu-west-3.amazonaws.com/sw0/sw0.js'

const init = async () => {
  const res = await fetch('/hello').then(r => r.json())
  document.body.innerHTML = JSON.stringify(res)
}

if ('serviceWorker' in navigator) {
  register('./service-worker.js').then(init)
}
