import React from "react";
import { useSelector } from "react-redux";

const Transaction = ({product}) => {
     
     return (
          <div style={{width:'30%', height:'30%'}}>
               <h1>Transaction</h1>
               <button>Change</button>
               <div>
               {
                    product&&product?.map((pro,index)=>(<p key={index}>{pro.productid}</p>))
               }
               </div>
          </div>
     );
};

export default Transaction;
