import React, { useEffect, useState } from "react";
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { useSelector } from "react-redux";

ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

const TransactionChart = ({category}) => {
 
  const [data,setData]=useState({
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ], 
});
  
  const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
  
  useEffect(()=>{
    
      const label = [];
  const temp = [];
  const bgcolor =[];
      for(var i=0;i<category?.length;i++) {
        label.push(category[i]._id);
        temp.push(category[i].count)
        bgcolor.push(randColor())
    }
    console.log(bgcolor);
    setData(
      {
        datasets: [{
            data:temp,
            backgroundColor:bgcolor
        },
      ],
      labels:label, 
    }
    )
   
  },[]);
  
  

     return (
          <div style={{width:'30%', height:'30%'}}>
               <h1>TransactionChart</h1>
               <Doughnut data={data}/>
          </div>
     );
};

export default TransactionChart;
