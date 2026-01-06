import {  useContext} from "react";
import { PagesContext } from "../PagesContext";
import './Dashboard.css';
import Marquee from "./Marquee";
import RecentOrdersTable from "./RecentOrdersTable";
import Charts from "./Charts";
import WelcomeSlider from "./WelcomeSlider";
import FeedbackSection from "./FeedbackSection";
import TopCustomersTable from "./TopCustomersTable";
import Companies from "./Companies";
import Cards from "./Cards";

function Dashboard(){

    const{ Error,Loading}=useContext(PagesContext);
   
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
         
       <div>
        <Cards/>
       </div>

        <div>
            <Charts/>
        </div>

    <div className="flex gap-5 w-183">

         <div>
            <RecentOrdersTable/>
          </div>

           <div>
            <TopCustomersTable/>
          </div>

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
