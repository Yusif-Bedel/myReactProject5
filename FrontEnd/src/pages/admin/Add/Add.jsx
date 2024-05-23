import axios from 'axios'
import { Formik } from 'formik'
import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const Add = () => {
  const {data,setData}=useContext(MainContext)
  return (
    <div style={{padding:"100px 0px"}}>
      <Formik
        initialValues={{ image: '', title: '' , price: '',description: ''}}
        onSubmit={(values, { setSubmitting }) => {
          axios.post("http://localhost:4404/products",{
            image:values.image,
            title:values.title,
            price:values.price,
            description:values.description
          }).then(res=>{
            setData([...data,res.data])
          })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && errors.image}
            <input
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && errors.title}
            <input
              type="number"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <input
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && errors.description}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Add
