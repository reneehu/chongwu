/**
 * Created by michaelzhao007 on 11/27/2014.
 */

var express = require('express');
var app = express();

app.use(express.logger('dev'));
app.listen(process.env.PORT || 5000);
