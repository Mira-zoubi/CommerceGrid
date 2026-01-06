import { useContext } from "react";
import { PagesContext } from "../PagesContext";

function RecentOrdersTable(){

    const{RecentOrders}=useContext(PagesContext);
    return(

    
     <div className="RecentOrdersTableContainer">
            <h2> Recent Orders</h2>
           <table className="RecentOrdersTable">
        
            <thead className="thead">
                <th className="th">Title </th>
                <th className="th"> Price</th>
                <th className="th"> Quantity</th>
            </thead>
 
            <tbody >
                
                {RecentOrders.map((item)=>{
 
                    return(
                        <tr>
                        
                            <td className="td">{item.title}</td>
                            <td className="td">{item.price}</td>
                            <td className="td">{item.quantity}</td>
                        </tr>
                    )
                })}
            </tbody>
           </table>
 
        </div>
    )
}
export default RecentOrdersTable;