import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, List, ListItem } from '@material-ui/core'
import { Title } from './Styles'
import { connect } from 'react-redux'
import { fetchItems } from '../Modules/actions/itemActions'

const Bookshelf = (props) => {
    useEffect(() => {
        props.fetchItems('/api/books')
    }, [])

    return (
        <Box>
            <Title variant="h3">Список книг</Title>
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
        </Box>
    )
}

const mapStateToProps = (state) => ({
    items: state.items,
    itemsAreLoading: state.itemsAreLoading,
    fetchItemsFailed: state.fetchItemsFailed
})

export default connect(mapStateToProps, { fetchItems })(Bookshelf)
