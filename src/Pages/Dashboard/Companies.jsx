import aramexLogo from "../../assets/aramex.png";
import appleLogo from "../../assets/apple.png";
import amazonLogo from "../../assets/amazon.png";
import "./Companies.css";

import { Link } from "react-router-dom";

function Companies(){
    return (
        <>
        
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
        </>
    )
}
export default Companies;