import React from "react";
import data from "./data";
import Itemcard from "./Itemcard";

const Content = () => {
   console.warn(data.productData)
  return (
     <>
     <h1 className="text-center mt-3">All Items</h1>
     <section className="py-4 container">
      <div className="a-container">
        {data.productData.map((item, index)=>{
          return(
            <Itemcard 
            img={item.img} 
            title={item.title} 
            desc={item.desc} 
            price={item.price} 
            item={item} 
            key={index} />
          )
        })}
          
      </div>
     </section>
     </>
  );
};

export default Content;
