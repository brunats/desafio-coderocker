function Classified(items) {
  const postPlace = ['big','smallRight', 'smallLeft']
  const classifiedPosts = []

  let smallPost = null

  items.map((item, index) => {
    const key = postPlace[index % 3]

    if (key === 'big') {
      classifiedPosts.push([key.toString(), item])
    }
    else {
      if (key === 'smallRight') {
        smallPost = item
      } else {
        classifiedPosts.push(['small', [smallPost, item]])
        smallPost = null
      }
    }
  })

  if (smallPost !== null) {
    classifiedPosts.push(['small', [smallPost]])
  }

  return classifiedPosts
}

export default Classified