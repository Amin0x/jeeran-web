const express = require('express');
const app = express();


// set the port of our application
// process.env.PORT lets the port be set by server
var port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

const routes_api1 = require('./route/api/v1/api');
app.use('api/v1/', routes_api1);

const routes_web = require('./route/web/web');
app.use('/', routes_web);

const routes_admin = require('./route/admin/admin');
app.use('admin/', routes_admin);


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

const io = socketIO(app);
io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
    socket.on('message', function() {});
  });

  


module.exports = app;