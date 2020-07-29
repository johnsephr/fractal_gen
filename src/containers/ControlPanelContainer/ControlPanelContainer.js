import React, { useContext } from 'react'

// components
import ControlPanel from '../../components/ControlPanel/ControlPanel'

// MUI
// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// contexts
import ControlPanelContextProvider, { ControlPanelContext } from '../../contexts/ControlPanelContext';

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        background: '#120a27',
        padding: 20,
        height: 'auto',
        width: '100%'
    }
}))

const ControlPanelContainer = props => {
    const classes = useStyles(props)
    return (
        <div className={classes.root}>
            <ControlPanel />
        </div>
    )
}

export default ControlPanelContainer
