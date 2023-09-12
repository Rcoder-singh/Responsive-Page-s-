import React from 'react'
import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

const Layout = ({component}) => {
  return (
      <div className="flex flex-col">
          <Header />
          {component}
          <Footer/>
      </div>
  )
}

export default Layout