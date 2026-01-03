import './AppHeader.css';

import DashboardLogo from '../../assets/DashboardLogo.jpg';



import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';


function NavbarItem ({href, children, isActive}){
    return (
        <>
        <div >
  
             <Link to={href} className={`link ${isActive && "link-active"}`} >
            {children}
            </Link>
     
        </div>
        </>
    )
}

const NavbarItems=[
    
     {href:'/',  children:"Dashboard"},
     {href:'/inventory',  children:"Inventory"},
      {href:'/orders',  children:"orders"},
       {href:'/customers',  children:"Customers"}
]
   

function AppHeader(){

    const {pathname}=useLocation(); //to get the path we are currently on 
    return(
        <>
        
        <nav className='AppHeader'> 
            
            <div className='HeaderTitle'>
  <img style={{width:"50px"}} src={DashboardLogo }/>
            <h1 className='HeaderTitle'> Mira's Panel </h1>
            </div>
          
           
           <div className='NavbarLinks'>
            {NavbarItems.map((item)=>{
                return (
                    <>
                      <NavbarItem
                      
                key={item.href}
                href={item.href}
                isActive={item.href===pathname}
                >
                    {item.children}
                </NavbarItem>
                    </>
                )
              
            })}
           </div>

            <div className='AuthLinks'>
            <Link to={"login"} className='LoginLink'>Login</Link>
            <Link to={"register"} className='LoginLink'>Register</Link>
            <Link to={"cart"} ><ShoppingCartOutlined  style={{fontSize:"25px", color:"deeppink"}}/></Link>  
            </div>

            
         </nav>
       
        </>
    )
}
export default AppHeader;