import React from 'react'
import { useParams } from 'react-router-dom';

let data = {
  1 : "Mouse",
  2 : "Keyboard",
  3 : "Monitor" 
};
// console.log(data);

const Product = ()=> {
  const { id } = useParams();
  return (
    <div>
      Product : {id} : { data[id] }
      </div>
  );
};

export default Product