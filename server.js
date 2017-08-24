var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

/* Function to handle server requests */ 
var requestHandler = function(request, response) {
  /* Read url */
  var parsedUrl = url.parse(request.url).pathname;

  /* Correct path and GET request? */
  if((parsedUrl == '/listings') && (request.method == 'GET')) {
    /* Respond with JSON data */
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(listingData));
  }
  else {
    /* Respond with error */
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('Bad gateway error');
  }
};

/* Create server */
server = http.createServer(requestHandler);

/* File system callback */
fs.readFile('listings.json', 'utf8', function(err, data) {  
  /* Save data */
  listingData = JSON.parse(data);
  
  /* Start server */
  server.listen(port, function() {
    /* Server listening callback */
    console.log('Server listening on: http://localhost:' + port);
  });
});
