import React from 'react'

import App from '../Components/App'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '100%',
  },
})

function Posts({ location }) {
  const style = useStyles()

  return (
    <App>
      <div className={style.root}>
        author = {location.state.author}
        title = {location.state.title}
      </div>
    </App>
  )
}


export default Posts