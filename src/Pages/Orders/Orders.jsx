import { PagesContext } from "../PagesContext";
import { useContext } from "react";
import './Orders.css' ;

function Orders(){
    const {OrdersArray} = useContext(PagesContext);
    return(
        <>
            <h2 className="PageTitle"> Orders</h2>

<div className="OrdersArrayContainer"> 
            <table className="Table">
                <thead>
                  

                    <th className="th">Thumbnail</th>
                    <th className="th">Title</th>
                    <th className="th">Price</th>
                    <th className="th">Quantity</th>
                    <th className="th">Discount Percentage</th>
                </thead>

                <tbody>
                    {OrdersArray.map((item)=>{
                        return(

                            
                             <tr>
                                <td>
                            <img  className="thumbnail" src={item.thumbnail} alt="thumbnail"/>
                                </td>
                            
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.discountPercentage}</td>
                        </tr>
                            
                        )
                       
                    })}
                </tbody>
            </table>
            </div>
        </>
    )
}
export default Orders;