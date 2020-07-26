import React, { Fragment, useRef, useState } from 'react'

// Components
import CanvasContainer from '../CanvasContainer/CanvasContainer'
import ControlPanelContainer from '../ControlPanelContainer/ControlPanelContainer'

// MUI
import { Typography, Grid, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Contexts
import ControlPanelContextProvider from '../../contexts/ControlPanelContext'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        background: 'black'
    },
}))

const HomePage = props => {
    const classes = useStyles(props)

    return (
        <div className={classes.root}>
            <ControlPanelContextProvider>
                <CanvasContainer />
                <ControlPanelContainer />
            </ControlPanelContextProvider>
        </div>
    )
}

export default HomePage