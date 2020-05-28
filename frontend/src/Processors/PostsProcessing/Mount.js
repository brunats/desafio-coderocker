import React from 'react'

import SmallCard from '../../Components/SmallCard'
import BigCard from '../../Components/BigCard'

function Mount(items) {
  let mountPosts = []

  items.map((item, index) => {
    const key = item[0]
    const post = item[1]

    if (key == 'big') {
      mountPosts.push(<BigCard post={post} />)
    }
    else {
      if (key == 'small') {
        mountPosts.push(<SmallCard posts={post} />)
      }
    }
  })

  return mountPosts
}

export default Mount