
function timeout(ms) {
  return new Promise(r => { setTimeout(() => { r() }, ms) })
}

module.exports = {
  timeout
}
