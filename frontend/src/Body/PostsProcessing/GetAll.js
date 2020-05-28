import React, { useState, useEffect } from 'react'

import SmallCard from '../../Cards/SmallCard'
import BigCard from '../../Cards/BigCard'
import Classified from './Classified'
import Mount from './Mount'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  line: {
    marginTop: '30px',
  },
})

const GetAllPosts = "http://127.0.0.1:4000/api/v1/posts/"

function GetAll() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  const style = useStyles()

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

  } else if (items.length > 0) {
      const classifiedItems = Classified(items)
      const posts = Mount(classifiedItems).map((post) =>
        <div className={style.line}>{post}</div>
      )

      return posts
  } else {
    return <></>
  }
}

export default GetAll