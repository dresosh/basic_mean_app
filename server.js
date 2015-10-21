var express     = require( 'express' ),
    app         = express(),
    morgan      = require( 'morgan' ),
    bodyParser  = require( 'body-parser' ),
    port        = process.env.PORT || 3000,
    mongoose    = require( 'mongoose' ),
    DB          = 'mongodb://localhost.27017/basic_app'


mongoose.connect( DB )

app.get( '/', function( req, res ) {
  res.send( '<h1>This is the home page</h1>' )
})






app.listen( port, function() {
  console.log(' You are currently running on Port ' + port )
})
this is a test
