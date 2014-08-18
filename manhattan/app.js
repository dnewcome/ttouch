/*jslint node: true, nomen: true */
'use strict';

var app = require('./server'),
    http = require('http');

app.set('port', process.env.PORT || 3000);

/* SERVER START */
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

