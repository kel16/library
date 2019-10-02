import {
    styled
} from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

const Title = styled(Typography)(({
    theme
}) => ({
    width: 'fit-content',
    margin: 'auto',
    padding: theme.spacing(2)
}))

export default Title