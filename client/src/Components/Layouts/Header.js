import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Link
} from '@material-ui/core'
import { ReactLink } from '../Styles'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ margin: 'auto' }}>
          <Link component={ReactLink} to="/">
            Books online
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header