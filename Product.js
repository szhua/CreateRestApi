'use strict';

//用于Product的生产:CRUD
var id = 0 ;

function nextId(){
    id++ ;
    return `p${id}`;
 }

 //consructor ;
function Product(name,manufacturer,price){
      this.id =nextId() ;
      this.name =name ;
      this.manufacturer =manufacturer ;
      this.price =price ;
}

//db (-++-)
var products =[
    new Product('iphone7','Apple',7000) ,
    new Product('thinkPad','Lenovo',5000) ,
    new Product('vivo','OPPO',3000) ,
    new Product('LBP2900','Canon',1000) 
];


module.exports ={

    getProducts:()=>{
        return products ;
    },
    getProduct:(id)=>{
        for(var p of products){
              if(p.id ===id){
               return p ;
                  break ;
              }
        }
        return null ;
    },
    createProduct:(name,manufacturer,price)=>{
       var p =  new Product(name,manufacturer ,price) ; 
       products.push(p);
       return p ;
    },
    deleteProduct:(id)=>{
        var index = -1;
        for(var i = 0 ;i<products.length;i++){
             if(products[i].id ===id){
                 index =i ;
                 break ;
             }
        }
        if(index>=0){
            return products.splice(index,1)[0] ;    
        }
        return null ;
    }
}





