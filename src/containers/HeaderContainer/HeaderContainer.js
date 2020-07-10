import React, { Fragment } from 'react'

// Components
import Header from '../../components/Header/Header'

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {}
}))

const HeaderContainer = props => {
    const classes = useStyles(props)
    return (
        <>
            <Header />
        </>
    )
}

export default HeaderContainer