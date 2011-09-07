app = require './app'

app.listen 29999
console.log("Express server listening on port %d", app.address().port)
