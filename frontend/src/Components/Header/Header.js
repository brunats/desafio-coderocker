import React from 'react'
import PropTypes from 'prop-types'

import FormContact from '../../Components/FormContact'

import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import CssBaseline from '@material-ui/core/CssBaseline'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'


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
  },
  buttonClose: {
    float: "right",
  },
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
  const style = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const form = <FormContact />

  return (
    <div>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <ElevationScroll {...props}>
          <AppBar color="primary">
            <Toolbar className={style.toolbar}>
              <Typography variant="h5" className={style.title}>
                Rockr Blog
              </Typography>
              <Button color="inherit" component={RouterLink} to="/">Posts</Button>
              <Button color="inherit" onClick={handleClickOpen}>Contact</Button>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            Contact
            <IconButton aria-label="close" size="small" className={style.buttonClose} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
              {form}
            </div>
          </DialogContent>
        </Dialog>
      </MuiThemeProvider>
    </div>
  )
}

export default Header
