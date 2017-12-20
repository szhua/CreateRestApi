'use strict' ;

const Koa =require('koa') ;

const app =new Koa() ;

const bodyParser =require('koa-bodyparser');

const controller =require('./controller');

const rest =require('./rest') ;

const templating =require('./templating');
const static_files =require('./static_files') ;





//log
app.use(async ( ctx ,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});


app.use(bodyParser());

app.use(rest.restify());

app.use(static_files('/static/',__dirname+"/static/"))


app.use(templating('views',{
    noCache:true,
    watch:true  
}))

app.use(controller());


app.listen(8080);