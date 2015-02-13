var express=require('express'),
    serveStatic = require('serve-static'),
    app = express();

app.set('port', (process.env.PORT || 5000));


app.use(serveStatic(__dirname + '/public'));

app.listen(app.get('port'), function(){
    console.log('Server Started at : localhost:'+ app.get('port'));
});