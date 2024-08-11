import React from 'react'
import  './Layout.css'

const Layout = ({children}) => {
  return (
    <div dir='rtl' className='layout'>
      {children}
    </div>
  )
}

export default Layout
