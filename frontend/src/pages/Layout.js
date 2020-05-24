import React, { Component} from 'react'

import { Button } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import styles from './Layout.scss'

class Layout extends Component {
  render() {
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={styles.menu_button} edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography className={styles.title} variant="h6" >
              News
            </Typography>
            <div className={styles.teste}>
              <Button color="inherit">Login</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Layout;
