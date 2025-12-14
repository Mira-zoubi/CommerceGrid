import { useContext, useState } from "react";
import { PagesContext } from "../PagesContext";
import "./Customers.css";

 function Customers(){
    const {CustomersArray}=useContext(PagesContext);

    return(
        <>
        <h2 className="PageTitle"> Customers</h2>
        <div className="CustomersArrayContainer">

<table className="Table">
    <thead>
       
        <th className="th"> Image</th>
        <th className="th">Gender</th>
        <th className="th"> First Name:</th>
        <th className="th"> Last Name:</th>
        <th className="th"> Phone Number</th>
     
    </thead>

        <tbody>


        {CustomersArray.map((item)=>{
            return(
                <tr>
                    <td>
                        <img className="thumbnail" src={item.picture.thumbnail} alt="customer image"/>
                    </td>
                    <td>{item.gender}</td>
                    <td>{item.name.first}</td>
                    <td>{item.name.last}</td>
                    <td>{item.phone}</td>

                </tr>
            )
        })}

        </tbody>

</table>

        </div>
        </>
    )
}
export default Customers;