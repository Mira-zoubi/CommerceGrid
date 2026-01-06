import { useState } from "react";
import { useContext } from "react"
import { PagesContext } from "../PagesContext"
import "./FeedbackSection.jsx";

function FeedbackSection(){

    const{FeedbackArray}=useContext(PagesContext);
     const[Shown, setShown]=useState(3);

      function showMoreLess(){
  if(Shown>= FeedbackArray.length){
        
              setShown(3)
        }
        else{
            
            setShown(prev=>prev+3)
        }
   }

    return (
         <div className="FeedbackContainer AnimatedBorder ">
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

    )
}
export default FeedbackSection;