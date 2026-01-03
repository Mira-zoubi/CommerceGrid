import {  useContext, useState } from "react";
import { PagesContext } from "../PagesContext";
import { Link } from "react-router-dom";
import './Dashboard.css';
import Marquee from "./Marquee";
import RecentOrdersTable from "./RecentOrdersTable";
import Charts from "./Charts";

import aramexLogo from "../../assets/aramex.png";
import appleLogo from "../../assets/apple.png";
import amazonLogo from "../../assets/amazon.png";


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

    const{ Error,Loading, InventoryTotal ,  OrdersTotal,  CustomersTotal, FeedbackArray}=useContext(PagesContext);
    const[Shown, setShown]=useState(3);


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

   function showMoreLess(){
  if(Shown>= FeedbackArray.length){
        
              setShown(3)
        }
        else{
            
            setShown(prev=>prev+3)
        }
   }

    return(
        <>

        <div className="DashboardContainer">
        <div className="DashboardContent">
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

          <div>
            <RecentOrdersTable/>
          </div>
           

     <div>
       <Marquee/>
        </div>           


 <h2 className="title"> Explore companies</h2>
        <div className="CompanyCardsConatiner">

            <div className="CompanyCard">

                   <img src={aramexLogo} alt="Aramex Company Logo" />
                    <h3> Aramex </h3>
                    <p> Logistics & Shipping</p>
                    <Link to={"/AramexDetails"}>Details</Link>
            </div>

            <div className="CompanyCard">

                   <img src={appleLogo} alt="Apple Company Logo" />
                    <h3> Aramex </h3>
                    <p>Online retail marketplace</p>
                    <Link to={"/AppleDetails"}>Details</Link>
            </div>

                <div className="CompanyCard">

                   <img src={amazonLogo} alt="Amazon Company Logo" />
                    <h3> Aramex </h3>
                    <p>Technology supplier</p>
                    <Link to={"/AmazonDetails"}>Details</Link>
            </div>
                
       
        </div>
        </div>

 
        <div className="FeedbackContainer">
           <h2> Feedback</h2>
        
            {FeedbackArray
            .slice(0, Shown)
            .map((feedback)=>{
                return(
                <>
                    <li className="FeedbackMessages"> {feedback.body}</li>
                </>
                )
               
            })}
             
            <button className="ShowMoreLessButton" onClick={showMoreLess}> {Shown>= FeedbackArray.length ?" see less..." : "see more... "}</button>
       
        </div>

        </div>
        </>
        
    )


      
}
export default Dashboard;
