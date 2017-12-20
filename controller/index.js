'use strict' ;

//MVC contrller

module.exports ={
    'GET /':async(ctx,next)=>{
        ctx.render('index.html');
    }
}