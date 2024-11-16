import React from 'react'
import AddressCard from './AddressCard'

function OrderDetail() {
  return (
    <div>
        <div className='px-5 lg:px-20'>
        <h1 className='font-semibold text-xl py-7 '>Dilivery Address</h1>
        <AddressCard/>
        </div>
      
    </div>
  )
}

export default OrderDetail
