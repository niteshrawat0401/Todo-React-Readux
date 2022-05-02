import React from "react";
import { Link, Outlet } from "react-router-dom";

// list of products
let data = [
  {
    id: 1,
    name: "Mouse",
    // imgUrl:
      // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjUEN0D-4MXAGfFms-zzBshH5N0azHHFxxHA&usqp=CAU",
  },
  {
    id: 2,
    name: "Keyboard",
    // imgUrl:
      // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg9oYo-BtoWi3znKtEi2RpE0AKe0BLr5MHqw&usqp=CAU",
  },
  {
    id: 3,
    name: "PC",
    // imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstHOSRBMRtto7YvF6yRhYWJT9ryWItNGJgQ&usqp=CAU",
  },
];
const Products = () => {
  return (
    <div>
      Products :
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          padding: "10px",
          margin: "10px",
        }}
      >
        <div>
          {data.map((item) => (
            <div key={item.id} style={{ padding: "10px", margin: "10px" }}>
              <Link to={`/products/${item.id}`}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Products;
