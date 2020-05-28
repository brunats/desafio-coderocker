import React from 'react'

import Header from '../Header/Header'
import Body from '../Body/Body'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',

    textAlign: 'center',
    
    background: 'linear-gradient(90deg, #F1A10A 0%, #342303 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  
}))

function App() {
  const style = useStyles()

  return (
    <div className={style.root}>
      <Header />
      <Body />
    </div>
  )
}

export default App
