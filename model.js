var i = 0;
setInterval(function() {
  console.log('Status update '+i+' from model')
  if (i === 5) {
    process.exit(0)
  }
  i += 1;
}, 1000)
