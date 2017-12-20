'use strict';


module.exports={
    APIError: function (code, message) {
        this.code = code || 'internal:unknown_error';
        this.message = message || '';
    },
    restify:(pathPrefix)=>{
        pathPrefix =pathPrefix || '/api/';
        return async(ctx,next)=>{
            //符合路径的情况下；
            if(ctx.request.path.startsWith(pathPrefix)) {
                //进行统一的处理；
                ctx.rest =(data)=>{
                    ctx.type ='application/json' ;
                    ctx.body =data ;    
                }
                try {
                    await next(); 
                } catch (e) {
                    ctx.type ='application/json' ;
                    ctx.body ={
                        code:e.code||'internal:unknown_error',
                        message:e.message||'' 
                    }
                } 
            } else{
                await next();            

            }
        }

    }
}










