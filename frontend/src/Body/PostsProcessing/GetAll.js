import React, { useState, useEffect } from 'react'

import CardLittle from '../../CardLittle/CardLittle'
import Classified from './Classified'

const GetAllPosts = "http://127.0.0.1:4000/api/v1/posts/"

function GetAll() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(GetAllPosts)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.data)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    const classifiedItems = Classified(items)
    console.log(classifiedItems)
    
    return (
      <CardLittle posts={items}/>
    )
  }
}

export default GetAll