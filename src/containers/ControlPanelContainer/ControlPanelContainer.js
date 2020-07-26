import React, { useContext } from 'react'

// components
import ControlPanel from '../../components/ControlPanel/ControlPanel'

// MUI
// import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// contexts
import { ControlPanelContext } from '../../contexts/ControlPanelContext';

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        // position: 'absolute',
        // bottom: 20,
        // left: 0,
        background: 'black',
        height: 150,
        width: '100%'
    }
}))

const ControlPanelContainer = props => {
    const classes = useStyles(props)
    const { genTrigger, setGenTrigger } = useContext(ControlPanelContext);
    return (
        <div className={classes.root}>
            <ControlPanel genTrigger={genTrigger} setGenTrigger={setGenTrigger} />
        </div>
    )
}

export default ControlPanelContainer
