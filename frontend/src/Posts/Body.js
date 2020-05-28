import React from 'react'

import GetAll from './PostsProcessing/GetAll.js.js.js'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '100%',
  },
})

function Body() {
  const style = useStyles()

  const cards = [
    {
      "author": "Kelsi Monahan",
      "title": "Qui occaecati vero et quibusdam non",
      "post": "Saepe quia culpa vero. Velit numquam corporis nihil sint enim exercitationem. Rem nulla illum sint et id dolore voluptas",
      "image_url": "https://source.unsplash.com/640x640/?Rock-concert",
    },
    {
      "author": "Mrs. Alexanne Schneider",
      "title": "Architecto quos rem unde quia accusantium",
      "post": "Voluptatum omnis et dolor architecto non totam aspernatur sapiente. Et accusantium rem. Assumenda quia error",
      "image_url": "https://source.unsplash.com/640x640/?Rock-concert",
    }
  ]

  return (
    <div className={style.root}>
      {GetAll()}
    </div>
  )
}

export default Body
