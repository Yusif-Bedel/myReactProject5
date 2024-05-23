import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const wishHandler=(title)=>{
    let wishItem=wishlist.find((x)=>x.title==title)
    if(wishItem){
      setWishlist([...wishlist.filter((x)=>x.title!=title)])
      alert("item removed from wishlist")
    }
    else{
      let target=data.find((x)=>x.title==title)
      setWishlist([...wishlist,target])
      alert("item added to wishlist")
    }
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>

            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            wishlist.map((item,index)=>{
              console.log(item)
              return(<tr key={index} >
            <td><img width={"60px"} src={item.image} alt=""/></td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td><button className="btn btn-danger" onClick={()=>{
              wishHandler(item.title)
            }}>Remove</button></td>
          </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
