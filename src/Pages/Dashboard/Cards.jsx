import { useContext } from "react";
import { PagesContext } from "../PagesContext";
import "./Cards.css";// import  CountUp  from "react-countup"; // i imported this and installed it to make a count up number(for inventory, customers and orders total)
import AnimatedCounter from "./AnimatedCounter";



function Cards(){

const {InventoryTotal ,  OrdersTotal,  CustomersTotal}=useContext(PagesContext);

function TotalItems({title,children } ){
    return(
    
        
          <div className="Cards">
 
            <p className="Title">{title}</p>
        
            <div className="total">
           {children} <span className="Percentage "> % </span>
           
             </div>
 
            </div>

        
    )
}
const Items=[
    {title:"Inventory" , children : InventoryTotal  },
     {title:"Orders" , children: OrdersTotal },
      {title:"Customers" , children: CustomersTotal}
       
];
console.log({
  InventoryTotal,
  OrdersTotal,
  CustomersTotal,
  types: {
    inventory: typeof InventoryTotal,
    orders: typeof OrdersTotal,
    customers: typeof CustomersTotal
  }
});

 {console.log("CountUp type:", typeof CountUp)}

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
              <AnimatedCounter value={Number(item.children)} />
                </TotalItems>

                </>   
            )
        })}
        </div>
        </div>
    )
}
export default Cards;