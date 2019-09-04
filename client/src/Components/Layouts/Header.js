import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <AppBar position="static" style={{ background: '#263238' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: 'none', color: '#FFF' }}>
            <Typography variant="h6" className={classes.title}>
              Books online
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  )
}