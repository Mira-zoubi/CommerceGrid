import { useContext } from "react";
import { PagesContext } from "../PagesContext";
import "./Inventory.css";
function Inventory(){

    const{InventoryArray}=useContext(PagesContext);

    return(
        <>
        <h2 className="PageTitle"> Inventory</h2>
        <div className="InventoryArrayContainer">

        <table className="Table"> 
            <thead >
            
                <th className="th">thumbnail</th>
                <th className="th">Title</th>
                <th className="th">Stock</th>
                <th className="th">Price</th>
                <th className="th">Rating</th>
                <th className="th">Brand</th>
                <th className="th">Category</th>
            </thead>

            <tbody>

        {InventoryArray.map((item)=>{
                return(
                    <>
                    
                    <tr>
                        <td>
                            <img className="thumbnail" src={item.thumbnail} alt="Image"/>
                        </td>
                        
                        <td>{item.title}</td>
                        <td>{item.stock}</td>
                        <td>{item.price}</td>
                
                        <td> {"⭐".repeat(Math.round(item.rating))} </td> 
                        
                       
                      
                        <td>{item.brand}</td>
                        <td>{item.category}</td>
                    </tr>

                    </>
                )
            })}
            </tbody>
        </table>

            
           
        </div>
        </>
    )
}
export default Inventory;