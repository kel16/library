import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchItems } from '../Modules/actions/itemActions'
import { Title } from './Styles'
import { Paper, Box, Typography } from '@material-ui/core'

const About = withRouter(props => {
    const location = props.location.pathname

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
                        <Title variant="h4">Информация о книге "{data.title}"</Title>
                        <Box p={2} style={{ display: 'flex' }}>
                            <img src={data.picture} />
                            <Box mx={1}>
                                <Typography><b>Автор:</b> {data.author}</Typography>
                                <Typography><b>Дата публикации: </b>{data.publication_date}</Typography>
                                <Typography><b>Аннотация: </b>{data.annotation}</Typography>
                            </Box>
                        </Box>
                    </Paper>
                ))
            }
        </>
    )
})

const mapStateToProps = (state) => ({
    items: state.items,
    itemsAreLoading: state.itemsAreLoading,
    fetchItemsFailed: state.fetchItemsFailed
})

export default connect(mapStateToProps, { fetchItems })(About)
