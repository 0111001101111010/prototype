var request = require('request')
app.get('/', function(req,res) {
  //modify the url in any way you want
  var newurl = 'http://google.com/' 
  request(newurl).pipe(res)
})
