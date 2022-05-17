const connection = require('../../bd/mysql');

module.exports = {
    index:(req, res)=>{
        if(req.session.username){
            res.render('home',{username:req.session.username, email:req.session.email});
        }else{
        res.render('login')
        }
    },
    
    auth:(req,res)=>{
        if(req.body.sign_in==""){
            let pass = req.body.pass
    
            var sql = 'SELECT id, username, correo FROM datos WHERE username = "' + req.body.username + '" AND pass = "' + pass + '"';    
               //console.log(sql);
            connection.query(sql, function(err, resp, fields){
                if(resp.length){
                    //console.log(resp[0].id);
                    req.session.userid = resp[0].id;
                    req.session.username = resp[0].username;
                    req.session.email = resp[0].correo;
                    res.redirect('/')
                }else{
                    res.redirect('/404')
                }
            });
        }else{
            res.redirect('/registro')
        }
    },
};


