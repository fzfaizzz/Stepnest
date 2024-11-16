import React from 'react'
import { useParams } from 'react-router-dom'

function page() {
    const {query} = useParams()
  return (
    <div>
      {query}j
    </div>
  )
}

export default page
