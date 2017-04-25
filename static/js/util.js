function hide(selector) {
  var cl = document.querySelector(selector).classList

  if (!cl.contains('hidden')) {
    cl.add('hidden')
  }
}

function show(selector) {
  var cl = document.querySelector(selector).classList

  if (cl.contains('hidden')) {
    cl.remove('hidden')
  }
}
