import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchItems } from '../Modules/actions/itemActions'
import PropTypes from 'prop-types'
import { useStyles } from './useStyles'
import { Paper, Grid, Typography } from '@material-ui/core'

const About = withRouter(props => {
    const location = props.location.pathname
    const classes = useStyles()

    useEffect(() => {
        props.fetchItems(`/api/${location}`)
    }, [])

    return (
        <>
            {props.itemsAreLoading ?
                <Typography>Загрузка информации о книге...</Typography>
                :
                props.items.map(data => (
                    <Paper key={data.b_id}>
                        <Typography variant="h4" className={classes.title}>Информация о книге "{data.title}"</Typography>
                        <Grid className={classes.details}>
                            <img src={data.picture} />
                            <Grid className={classes.info}>
                                <Typography><b>Автор:</b> {data.author}</Typography>
                                <Typography><b>Дата публикации: </b>{data.publication_date}</Typography>
                                <Typography><b>Аннотация: </b>{data.annotation}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                ))
            }
        </>
    )
})

About.propTypes = {
    fetchItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    items: state.items,
    itemsAreLoading: state.itemsAreLoading,
    fetchItemsFailed: state.fetchItemsFailed
})

export default connect(mapStateToProps, { fetchItems })(About)
