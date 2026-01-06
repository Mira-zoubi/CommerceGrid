import {Chart as ChartJS} from "chart.js/auto";
import {Bar, Doughnut, Line} from "react-chartjs-2";
import BarData from "../../Data/BarData.json";
import DoughnutData from "../../Data/DoughnutData.json";
import "./Charts.css"

function Charts(){
    
    return(

        <div className="Charts">

       <div className="chart-card">

        <h1 style={{color:"black"}}>Revenue Overview</h1>
        <p style={{color:"gray", marginBottom:"30px"}}>Monthly performance and order trends</p>

          <Bar 
    data={{
        labels:BarData.map((item=>item.label)),
        datasets:[
            {
                label:"Revenue",
                data:BarData.map((item=>item.data)),
                backgroundColor:[
                     "#6E6AF2",
                     "#F38DBE",
                ],
                borderRadius: 5,
            
             
            },       
        ]
    }}
    />
        </div>     
  
<div className="chart-card">
<h1 style={{color:"black"}}> Customer Distribution</h1>
<p style={{color:"gray", marginBottom:"30px"}}>Customers by country</p>

 <Doughnut 
    data={{
        labels:DoughnutData.map((item=>item.label)),
        datasets:[
            {
                label:"Count",
                data:DoughnutData.map((item=>item.data)),
                backgroundColor: [
                "#5B6CFA", 
                "#F04C7C", 
                "#22A6B3", 
                "#F6B93B", 
                "#6D4C9A", 
                "#E17055", 
                ]

            },         
        ],
        
    }}
    />
</div>
    
</div>
    )



}

export default Charts;