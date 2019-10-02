import {
    createMuiTheme
} from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'

const theme = createMuiTheme({
    type: 'light',
    "@global": {
        body: {
            height: '100vh',
            width: '100vw',
            padding: 0,
            margin: 0
        }
    },
    overrides: {
        MuiLink: {
            underlineHover: {
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'none',
                }
            }
        }
    },
    palette: {
        primary: {
            main: "#263238"
        },
        secondary: {
            main: "#CFD8DC"
        },
        background: {
            default: blueGrey['100'],
        }
    },
    text: {
        primary: '#fff'
    }
})

export default theme