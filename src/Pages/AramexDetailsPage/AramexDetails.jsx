import { Outlet, Link} from "react-router-dom";
import aramexLogo from "../../assets/aramex.png";


function AramexDetails(){
    return(
        <>
        <div> 

<div className="flex gap-4 border-2 items-start">
 <div className="border-2 rounded-md">
            <img src={aramexLogo} alt="Aramex Company Logo"/>
            
        </div>
        <div>
            <h1> Aramex</h1>
            <p> Logiostics and Services</p>

        </div>
        <div >
            <Link to={"ViewProducts"} className="bg-black text-white rounded-lg hover:bg-gray-800"
            
            type="button" > View Products</Link>
 
           
        </div>

        </div>
        
<Outlet/>
</div>

       
        </>
    )
}
export default AramexDetails;