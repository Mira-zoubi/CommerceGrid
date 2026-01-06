import {  useContext, useState } from "react";
import { PagesContext } from "../PagesContext";
import { Link } from "react-router-dom";
import './Dashboard.css';
import Marquee from "./Marquee";
import RecentOrdersTable from "./RecentOrdersTable";
import Charts from "./Charts";
import WelcomeSlider from "./WelcomeSlider";
import FeedbackSection from "./FeedbackSection";
// import TopCustomersTable from "./TopCustomersTable";
import Companies from "./Companies";




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


function Dashboard(){

    const{ Error,Loading, InventoryTotal ,  OrdersTotal,  CustomersTotal}=useContext(PagesContext);
   


    const Items=[
    {title:"Inventory" , children : InventoryTotal },
     {title:"Orders" , children: OrdersTotal },
      {title:"Customers" , children: CustomersTotal}
       
];
   if(Error){
      return  <h1> Error in fetching the data!</h1>
    }
    if(Loading){
          return  <h1> Loading...</h1>
    }

 

    return(
        <>


        <div className="DashboardContainer">
        <div className="DashboardContent">


         <div>
            <WelcomeSlider/>
         </div>
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

     

        <div>
            <Charts/>
        </div>

<div className="flex gap-5 w-183">

     <div>
            <RecentOrdersTable/>
          </div>
           {/* <div>
            <RecentOrdersTable/>
          </div> */}

</div>
         

           

     <div>
       <Marquee/>
        </div>           

<div>
    <Companies/>
</div>

        </div>

 
       <FeedbackSection/>
        </div>
        </>
        
    )


      
}
export default Dashboard;
