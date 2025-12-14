import './SideMenu.css';
import { Link } from "react-router-dom";
import Inventory from '../../Pages/Inventory/Inventory';
import Orders from '../../Pages/Orders/Orders';
import Customers from '../../Pages/Customers/Customers';
import { AppstoreOutlined, InboxOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";


function SideMenu(){
    return(
        <>
        <div className='SideMenu'>
            
          
            <Link to="/" className='SideMenuLinks'><AppstoreOutlined /> Dashboard</Link>
             <Link to="inventory" className='SideMenuLinks'><InboxOutlined />Inventory</Link>
              <Link to="orders" className='SideMenuLinks'><ShoppingCartOutlined />Orders</Link>
               <Link to="customers" className='SideMenuLinks'><UserOutlined />Customer</Link>
            </div>
        </>
    )
}
export default SideMenu;