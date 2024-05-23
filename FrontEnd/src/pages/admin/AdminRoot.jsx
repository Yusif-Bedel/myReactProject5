import React from 'react'
import Header from '../../layout/admin/Header/Header'
import { Outlet } from 'react-router'

const AdminRoot = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default AdminRoot
