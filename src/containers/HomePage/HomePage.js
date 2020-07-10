import React, { Fragment } from 'react'

// Components
import HeaderContainer from '../HeaderContainer/HeaderContainer'

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
    grid: {
        // padding: '125px'
        padding: 0
    },
    headerContainer: {

    },
    text: {
        flexGrow: 1,
        padding: 15
    }
}))

const HomePage = props => {
    const classes = useStyles(props)
    return (
        <Fragment>
            <HeaderContainer />
        </Fragment>
    )
}

export default HomePage