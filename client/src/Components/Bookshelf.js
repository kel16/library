import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, List, ListItem } from '@material-ui/core'
import { useStyles } from './useStyles'
import { connect } from 'react-redux'
import { fetchItems } from '../Modules/actions/itemActions'
import PropTypes from 'prop-types'

const Bookshelf = (props) => {
    const classes = useStyles()
    useEffect(() => {
        props.fetchItems('/api/books')
    }, [])

    return (
        <Grid>
            <Typography variant="h3" className={classes.title}>Книжная полка</Typography>
            {props.itemsAreLoading ? (
                'Загрузка книг'
            ) : (
                    <List>
                        {props.items.map(({ b_id, title }) => (
                            <ListItem key={`book-${b_id}`}>
                                <Link to={`/book/${b_id}`}>
                                    <Typography variant="h5">{title}</Typography>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                )}
        </Grid>
    )
}

Bookshelf.propTypes = {
    fetchItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    items: state.items,
    itemsAreLoading: state.itemsAreLoading,
    fetchItemsFailed: state.fetchItemsFailed
})

export default connect(mapStateToProps, { fetchItems })(Bookshelf)
