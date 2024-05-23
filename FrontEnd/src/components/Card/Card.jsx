import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"10px"}} className="myCards">
        <img width={"300px"} src={item.image} alt="" />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <span>{item.price}</span>
        <Link to={`/detail/${item._id}`}>Go to Details</Link>
    </div>
  )
}

export default Card
