import { useContext } from "react";
import { PagesContext } from "../PagesContext";

function Cards(){


function TotalItems({title,children } ){
    return(
        <>
        
          <div className="Cards">
 
            <p className="Title">{title}</p>
        
            <div className="total">
           {children}
             </div>
 
            </div>

        </>
    )
}
const {InventoryTotal ,  OrdersTotal,  CustomersTotal}=useContext(PagesContext);

 const Items=[
    {title:"Inventory" , children : InventoryTotal },
     {title:"Orders" , children: OrdersTotal },
      {title:"Customers" , children: CustomersTotal}
       
];

    return(
        <div>
             <h2 className="PageTitle"> Dashboard</h2>
        <div className="CardsContainer">
        {Items.map((item)=>{

            return(
                <>
                <TotalItems
                key={item.title}
                title={item.title}
                icon={item.icon}
                >
                {item.children}
                </TotalItems>
                </>   
            )
        })}
        </div>
        </div>
    )
}
export default Cards;