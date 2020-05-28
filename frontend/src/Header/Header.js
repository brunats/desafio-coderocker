import React from 'react'
import PropTypes from 'prop-types'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const theme = createMuiTheme({
  palette: {
    primary: {
      main:  '#2D2D2D'
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  toolbar: {
    paddingLeft: "15%",
    paddingRight: "15%",
  }
}))

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  if(trigger) {
    return React.cloneElement(children, {
      elevation: 4,
      positionFixed: true,
    })
  }

  return React.cloneElement(children, {
    elevation: 0,
    position: "static"
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
}

function Header(props) {
  const classes = useStyles()

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <ElevationScroll {...props}>
          <AppBar color="primary">
            <Toolbar className={classes.toolbar}>
              <Typography variant="h5" className={classes.title}>
                Rockr Blog
              </Typography>
              <Button color="inherit">Posts</Button>
              <Button color="inherit">Contact</Button>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </MuiThemeProvider>
    </div>
  )
}

export default Header
