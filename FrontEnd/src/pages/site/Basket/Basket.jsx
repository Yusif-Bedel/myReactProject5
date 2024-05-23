import React, { useEffect, useState } from 'react'

const Basket = () => {
  const [itemData,setItemData]=useState([])
  const [basket,setBasket]=useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[])
  useEffect(()=>{
    localStorage.setItem("basket",JSON.stringify(basket))
  },[basket])
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
  const deleteFromBasket = (id)=>{
    let salam=basket.find((e)=>e.id=id)
    if(salam){
      if(salam.count>1){
        salam.count--
        salam.totalPrice=salam.count*salam.price
        setBasket([...basket])
      }
      else{
        
        setBasket([...basket.filter((e)=>e.id!=id)])
      }
    }
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">TotalPrice</th>
            <th scope="col">Add</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            basket.map((item,index)=>{
              return(<tr key={index} item={item}>
            <td><img width={"60px"} src={item.image} alt="" /></td>
            <td>{item.title}</td>
            <td>{item.count}</td>
            <td>{item.price}</td>
            <td>{item.totalPrice}</td>
            <td><button className='btn btn-warning' onClick={()=>{
              addToBasket(item.title)
            }}>Add</button></td>
            <td><button className='btn btn-danger' onClick={()=>{
              deleteFromBasket(item._id)
            }}>Delete</button></td>

          </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Basket
