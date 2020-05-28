import React from 'react'

import App from '../Components/App'
import GetAll from '../Processors/PostsProcessing/GetAll.js'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '100%',
  },
})

function Home() {
  const style = useStyles()

  return (
    <App>
      <div className={style.root}>
        {GetAll()}
      </div>
    </App>
  )
}

export default Home
