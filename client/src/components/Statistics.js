import React from 'react'

const Statistics = ({product}) => {

  let totalitem=product?.length;
  let date=new Date(product?.[0].dateofsale)
  let sold=product?.filter((pro)=>{return pro.sold!==false})

  let notsold=totalitem-sold?.length
  let total=sold?.filter((pro)=>pro?.sold)?.map((pro)=>pro?.price)
  let sum=total?.reduce((prev,current)=>prev+current,0)

  console.log("total",sum);
  return (
    <div style={{width:'30%', height:'30%'}}>
      <h1>Statistics -{date.toLocaleString("default",{month:"short"})}</h1>
      <p>Total Sale-{parseFloat(sum).toFixed(2)}</p>
      <p>Total Sold Item-{sold?.length}</p>
      <p>Total Not Sold Item-{notsold}</p>
    </div>
  )
}

export default Statistics