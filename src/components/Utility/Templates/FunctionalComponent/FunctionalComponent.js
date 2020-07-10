import React, { Fragment } from 'react'

// MUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
    text: {
        flexGrow: 1
    }
}))

const FunctionalComponent = props => {
    const classes = useStyles(props)
    return (
        <Fragment>
            <Typography variant="h6" className={classes.text}>
                New Functional Component!
            </Typography>
        </Fragment>
    )
}

export default FunctionalComponent
