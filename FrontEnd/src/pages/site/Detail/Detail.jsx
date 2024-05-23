import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MainContext from '../../../context/context'
const Detail = () => {
  const {id}=useParams()
  const {data}=useContext(MainContext)
  const [itemData,setItemData]=useState([])
  const [wishlist,setWishlist]=useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])
  const [basket,setBasket]=useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[])
  useEffect(()=>{
    localStorage.setItem("basket",JSON.stringify(basket))
    localStorage.setItem("wishlist",JSON.stringify(wishlist))
  },[basket,wishlist])
  useEffect(()=>{
    axios.get(`http://localhost:4404/products/${id}`).then((res)=>{
      setItemData(res.data)
    })
  },[])
  const addToBasket=(title)=>{
    let basketItem=basket.find((e)=>e.title==title)
    if(!basketItem){
      setBasket([...basket,{...itemData,
                              count:1,
                              totalPrice:itemData.price
      }])
    }else{
      basketItem.count++
      basketItem.totalPrice=basketItem.count * basketItem.price
      setBasket([...basket])
    }
  }
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
    <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}} className="detail">
      <img width={"400px"} src={itemData.image} alt="" />
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"20px"}} className="detailText">
        <h2>{itemData.title}</h2>
        <p>{itemData.description}</p>
        <span>{itemData.price}</span>
        <button className='btn btn-warning' onClick={()=>{
          addToBasket(itemData.title)
        }}>Add to Basket</button>
        <button className='btn btn-secondary' onClick={()=>{
          wishHandler(itemData.title)
        }}><i class="fa-solid fa-heart"></i></button>
      </div>
    </div>
  )
}

export default Detail
