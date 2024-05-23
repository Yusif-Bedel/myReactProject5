import React, { useContext, useEffect, useState } from 'react'
import './Section2.scss'
import MainContext from '../../context/context'
import Card from '../Card/Card'
import { Field } from 'formik'
const Section2 = () => {
    const {data,setData}=useContext(MainContext)
    const [inpValue,setInpValue]=useState("")
    const [sort,setSort]=useState(null)
  return (
    <section className='section2'>
        <div className="container">
            <h2>Our Products</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
            <a href="#">View All Products <i class="fa-solid fa-arrow-right"></i></a>
            <input value={inpValue} type="text" onChange={(e)=>{
              setInpValue(e.target.value)
            }} />
            <button onClick={()=>{
                setSort({field:"title",asc:true})
            }} className='btn btn-primary'>A-Z</button>
            <button onClick={()=>{
                setSort({field:"title",asc:false})
            }} className='btn btn-primary'>Z-A</button>
            <button className='btn btn-warning' onClick={()=>{
                setSort({field:"price",asc:true})
            }}>Low</button>
            <button className='btn btn-warning' onClick={()=>{
                setSort({field:"price",asc:false})
            }}>High</button>
            <div className="s2Bottom">
            {
                data
                .filter(x=>x.title.toLowerCase().includes(inpValue.toLowerCase()))
                .sort((a,b)=>{
                    if(!sort){
                        return 0
                    }else if(sort.asc){
                        return (a[sort.field]>b[sort.field] ? 1 : b[sort.field]>a[sort.field] ? -1 :0)
                    }else if(!sort.asc){
                        return (a[sort.field]<b[sort.field] ? 1 : b[sort.field]<a[sort.field] ? -1 :0)
                    }
                })
                .map((item,index)=>{
                    return (<Card key={index} item={item} />)
                })
            }
            </div>
        </div>
    </section>
  )
}

export default Section2
