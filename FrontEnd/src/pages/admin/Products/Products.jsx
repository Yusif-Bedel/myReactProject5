import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import axios from 'axios'

const Products = () => {
  const {data,setData}=useContext(MainContext)
  const deleteItem=(id)=>{
    axios.delete(`http://localhost:4404/products/${id}`).then(res=>{
      setData([...res.data])
    })
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>{
              return(<tr key={index} item={item}>
            <td><img width={"60px"} src={item.image} alt="" /></td>
            <td>{item.title}</td>
            <td>{item.price} AZN</td>
            <td><button className='btn btn-danger' onClick={()=>{
              deleteItem(item._id)
            }}>Delete</button></td>
          </tr>

              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Products
