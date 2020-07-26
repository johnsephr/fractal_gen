import React, { Fragment } from 'react'

// MUI
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {}
}))

const ControlPanel = props => {
    const classes = useStyles(props)
    const { genTrigger, setGenTrigger } = props
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    yo
                </Grid>
                <Grid item xs={4}>
                    <button onClick={() => setGenTrigger(genTrigger + 1)}>Generate Fractal</button>
                </Grid>
                <Grid item xs={4}>
                    3
                </Grid>
            </Grid>
        </div>
    )
}

export default ControlPanel

