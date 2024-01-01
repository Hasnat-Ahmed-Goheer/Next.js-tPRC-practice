import axios from "axios";
import { log } from "console";
import React from "react";

type Product = {
  id: number;
  product: string;
  price: number;
};
// const getData = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts",
//     {
//       method: "GET",
//       next:{
  // the tags will allow to refetch the data when the tags are changed
//         tags:["product"],
//       }

//     }
    
//   );
//   const data = await res.json();
//   return data;
// };

const ProductPage  = async () => {
  
//  const data = await getData();
//   console.log(data);


  // this is an experimental feature and requires  the following in next.config.js
  //   experimental: {
        // serverActions: true,
    // }
// };
// this allows the user to takes the inputs from the form and add it to the mockApi without using the useState hook and the client side rendering
  // const addNewProduct = async (e: FormData) => {
  //   'use server'
  //     const product = e.get("product")?.toString();
  //     const price = e.get("product")?.toString();

  // };

  return (
    <div>
      <h2 className="text-xl">Product Page</h2>
      <form >
        <input
          type="text"
          // name="product"
          className="border-gray-400 border-2 p-4 m-4 rounded-md"
          placeholder="Enter Product"
        />
        <input
          type="text"
          // name="price"
          className="border-gray-400 border-2 rounded-md p-4 m-4"
          placeholder="Enter Price"
        />
        <button type="submit" className="border-2 p-2 bg-red-500 rounded-mdF">
          Add to Cart
        </button>
      </form>
      <div>
        <h2 className="text-xl">Products</h2>
        <ul className="flex flex-wrap gap-5">
          {/* {products.map((product) => (
            <li key={product.id}  className="flex flex-col p-3 m-2 shadow-xl">
              <p>{product.product}</p>
              <p>{product.price}</p>
            </li>
          ))}  */}
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;