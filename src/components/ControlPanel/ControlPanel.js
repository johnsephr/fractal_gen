import React, { Fragment } from 'react'

// MUI
import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        height: '100%'
    },
    grid: {
        height: '100%'
    },
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'flex-start'
    },
    label: {
        color: 'white',
        marginTop: 10
    },
    input: {
        height: 50,
        width: 100,
        fontSize: 20,
        outline: 'none',
        border: 'unset',
        color: 'white',
        textAlign: 'center',
        background: theme.palette.primary.main,
        borderRadius: 4,
    }
}))

const ControlPanel = props => {
    const classes = useStyles(props)
    const { genTrigger, setGenTrigger } = props
    return (
        <div className={classes.root}>
            <Grid container className={classes.grid}>
                <Grid item xs={4} className={classes.gridItem}>
                    <input className={classes.input} type='number' />
                    <Typography className={classes.label}>Branches</Typography>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Button variant="contained" color="primary" onClick={() => setGenTrigger(genTrigger + 1)} style={{
                        height: 50
                    }}>
                        Generate Fractal
                    </Button>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <input className={classes.input}type='number' />
                    <Typography className={classes.label}>Angle</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default ControlPanel

