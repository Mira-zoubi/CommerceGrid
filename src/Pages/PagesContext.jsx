
import { createContext, useEffect, useState } from "react";

export const PagesContext = createContext(null);

export function PagesProvider({children}){
     
    const[Error, setError]=useState(null);
    const[InventoryTotal, setInventoryTotal]=useState(0);
    const[OrdersTotal, setOrdersTotal]=useState(0);
    const[CustomersTotal, setCustomersTotal]=useState(0);
    const[RecentOrders, setRecentOrders]=useState([]);
    const[Loading, setLoading]=useState(true);
    const[InventoryArray, setInventoryArray]=useState([]);
    const[OrdersArray, setOrdersArray]=useState([]);
    const[CustomersArray, setCustomersArray]=useState([]);
    const[FeedbackArray, setFeedbackArray]=useState([]);


    //fetch for Inventory total
    useEffect(()=>{

          fetch("https://dummyjson.com/products")
    .then(resp=>{
        if(resp.status==200){
            return resp.json();
        }
        throw new Error("Error");
    })
    .catch(err=>setError(err))
    .then(data=>setInventoryTotal(data.total))

    }, [])

    //fetch for Orders total

    useEffect(()=>{

        fetch("https://dummyjson.com/carts")
        .then(resp=>{
            if(resp.status==200){
                return resp.json();
            }
            throw new Error ("Error");
        })
        .catch(err=>setError(err))
        .then(data=>setOrdersTotal(data.total))
        
        
    }, [])
//fetch for Customers total
    useEffect(()=>{

        fetch("https://dummyjson.com/users")
        .then(resp=>{
            if(resp.status==200){
                return resp.json();
            }
            throw new Error("Error")
        })
        .catch(err=>setError(err))
        .then(data=>setCustomersTotal(data.total))
    }, [])
  
    //fetch for products total
    useEffect(()=>{
        fetch("https://dummyjson.com/carts?limit=5")
        .then(resp=>{
            if(resp.status==200){
                return resp.json();
            }
            throw new Error("Error");
        })
        .catch(err=>setError(err))
        .then(data=>{
           const flatProducts=data.carts.flatMap(cart=>cart.products);
            setRecentOrders(flatProducts.slice(0,5));
        })
        .finally(()=>setLoading(false))

    }, [])
    //fetch for Inventory List (All)

    useEffect(()=>{

        fetch("https://dummyjson.com/products")
        .then(resp=>{
            if(resp.status ===200){
                return resp.json();
            }
            throw new Error("Error");
        })
        .catch(err=>setError(err))
        .then(data=>setInventoryArray(data.products))
        
    }, [])

    //fetch for Orders List (All)
    useEffect(()=>{

        fetch("https://dummyjson.com/carts")
        .then(resp=>{
            if (resp.status==200){
                return resp.json();
            }
            throw new Error("Error");
        })
       .catch(err=>setError(err))
        .then(data=>{
            const flatItems= data.carts.flatMap(cart=>cart.products);
            setOrdersArray(flatItems.slice(0,7));
        })
       

    }, [])


    //fetch for Customer List (All)

    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=10")
        .then(resp=>{
        if(resp.status==200){
            return resp.json();
        }
        throw new Error("error");
        })
        .catch(err=>setError(err))
        .then(data=>setCustomersArray(data.results))

    }, [])


    useEffect(()=>{

        fetch("https://dummyjson.com/comments")
        .then(resp=>{
            if(resp.status==200){
                return resp.json();
            }
            throw new Error("error");
        })
        .catch(err=>setError(err))
        .then(data=>setFeedbackArray(data.comments)
                    
    )

    }, [])



  return(
    <>
  <PagesContext value={{Error, Loading,InventoryTotal , OrdersTotal, CustomersTotal ,RecentOrders, InventoryArray , OrdersArray, CustomersArray, FeedbackArray}}>
    {children}
  </PagesContext>


    </>
  )


}
