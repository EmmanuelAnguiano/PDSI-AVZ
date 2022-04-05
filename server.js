// server.js
'use strict'
const express = require('express'),
        cookieParser = require('cookie-parser');
const session = require('express-session');
const connection = require('./bd/mysql.js')//
const app = express();
    app.use(cookieParser());
    app.use(session({
        secret: 'keyboard cat',
        resave: true,
        savenUnitialized: true,
        cookie: {
            maxAge: 60000
        }
    }))
app.get('/', function(req,res,next){
    if(req.session.views){
        req.session.views++
        res.setHeader('content-type', 'text/html')
        res.write('<p>views: '+req.session.views+'</p>')
        res.write('<p>expires in: '+ 
            (req.session.cookie.maxAge / 1000) + 
            's</p>')
        res.end()
    }else{
        req.session.views = 1
        res.end('welcome to the session demo. Refresh!')
    }
}) 
app.listen(8080);