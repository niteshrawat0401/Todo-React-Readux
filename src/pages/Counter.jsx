import React from 'react'
import { useParams } from 'react-router-dom'

export const Counter = () => {
    const params = useParams()
    return (
    <h1>Counter : {params.initialCount}</h1>
  )
}
