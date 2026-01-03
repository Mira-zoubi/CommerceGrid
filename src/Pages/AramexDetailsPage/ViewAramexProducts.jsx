import { useState } from "react";


function ViewAramexProducts(){
    
    const AramexProducts=[
    {id:crypto.randomUUID() , src:"https://www.victoriassecret.com/p/380x507/png/zz/25/02/07/02/112542122457_OM_F.jpg" , title:"Perfume" , description:"Victoria Secret Perfume "},
     {id:crypto.randomUUID(), src:"https://www.victoriassecret.com/p/380x507/png/zz/25/02/07/02/112542122457_OM_F.jpg" , title:"Perfume" , description:"Perfume "},
       {id:crypto.randomUUID(),src:"https://www.victoriassecret.com/p/380x507/png/zz/25/02/07/02/112542122457_OM_F.jpg" , title:"Perfume" , description:"Perfume "},
]

    return(
        <>
        <div> 
<div className="flex text-center  ">

{AramexProducts.map((product)=>{
    return(
        <>
       <div>     
        
        <img src={product.src} alt="prduct Image"/>
        <p> {product.title}</p> 
        <p> {product.description}</p>
      
         </div>   
       
        </>   
    )

})}
</div>
        </div>
        </>
    )
}
export default ViewAramexProducts;