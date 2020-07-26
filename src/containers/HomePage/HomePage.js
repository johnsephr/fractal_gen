import React, { Fragment, useRef, useState } from 'react'

// Components
import CanvasContainer from '../CanvasContainer/CanvasContainer'
import ControlPanelContainer from '../ControlPanelContainer/ControlPanelContainer'

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Contexts
import ControlPanelContextProvider from '../../contexts/ControlPanelContext'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {},
}))

const HomePage = props => {
    const classes = useStyles(props)

    return (
        <ControlPanelContextProvider>
            <CanvasContainer />
            <ControlPanelContainer />
        </ControlPanelContextProvider>
    )
}

export default HomePage