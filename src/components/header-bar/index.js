import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const style = theme => ({
  root: {
    width: '100%'
  },
  toolbar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const HeaderBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed" color="primary">
      <Toolbar className={classes.toolbar}>
        <Typography variant="title" align="center" color="inherit">
          Voting Dapp
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

export default withStyles(style)(HeaderBar)
