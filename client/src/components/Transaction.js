import React from "react";
import { useSelector } from "react-redux";

const Transaction = ({product}) => {
     
     return (
          <div style={{width:'30%', height:'30%'}}>
               <h1>Transaction</h1>
               <button>Change</button>
               <div>
                    <table>
                         <tr>
                              <th>Id</th>
                              <th>Title</th>
                              <th>Description</th>
                              <th>Price</th>
                              <th>Category</th>
                              <th>Sold</th>
                              <th>Image</th>
                         </tr>
                         {
                              product&&product?.map((pro,index)=>(<tr key={index}>
                              <td> <p>{pro.productid}</p></td>
                                   <td><p>{pro.title}</p></td>
                                   <td><p>{pro.description}</p></td>
                                   <td><p>{pro.price}</p></td>
                                   <td><p>{pro.category}</p></td>
                                   <td><p>{pro.sold.toString()}</p></td>
                                   <td><p>{pro.image}</p></td>
                                   </tr>))
                         }
                         
                    </table>
               </div>
          </div>
     );
};

export default Transaction;
