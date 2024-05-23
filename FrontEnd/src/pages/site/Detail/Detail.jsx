import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Detail = () => {
  const {id}=useParams()
  const [itemData,setItemData]=useState([])
  const [basket,setBasket]=useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[])
  useEffect(()=>{
    localStorage.setItem("basket",JSON.stringify(basket))
  },[basket])
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
      </div>
    </div>
  )
}

export default Detail
