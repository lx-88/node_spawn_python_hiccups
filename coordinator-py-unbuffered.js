var child_process = require('child_process')

function runModel(namespace, cmd, params) {
  var child = child_process.spawn(cmd, params, {
    // See https://nodejs.org/api/child_process.html#child_process_options_stdio
    stdio: ['ignore', 'pipe', 'pipe']
  })
  child.on('open', function () {
    console.log(namespace + ': Model is starting!')
  })

  child.stdout.on('data', function (data) {
    console.log(namespace + ' stdout: ' + data.toString().trim())
  })

  child.stderr.on('data', function (data) {
    console.log(namespace + ' stderr: ' + data.toString().trim())
  })

  child.on('close', function () {
    console.log(namespace + ': Model is done!')
  })
}

runModel('python unbuffered model', 'python', ['-u', 'model.py',])