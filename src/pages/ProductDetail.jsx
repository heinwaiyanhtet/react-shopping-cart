import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { productId } = useParams();
  return (
    <div>
        <h1>Hello I am product Detail {productId} </h1>
    </div>
  )
}
