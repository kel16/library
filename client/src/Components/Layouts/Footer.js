import React from 'react'
import { Container, Typography } from '@material-ui/core'

const Footer = () => {
    return (
        <Container maxWidth="lg" style={{ backgroundColor: '#F5F5F5' }} >
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Developed by me
            </Typography>
        </Container>
    )
}

export default Footer