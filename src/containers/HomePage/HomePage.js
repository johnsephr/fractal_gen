import React, { Fragment, useRef, useState } from 'react'

// Components
import CanvasContainer from '../CanvasContainer/CanvasContainer'
import ControlPanelContainer from '../ControlPanelContainer/ControlPanelContainer'

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
    const canvasRef = useRef(null)

    return (
        <Fragment>
            <CanvasContainer />
            {/* <ControlPanelContainer /> */}
        </Fragment>
    )
}

export default HomePage