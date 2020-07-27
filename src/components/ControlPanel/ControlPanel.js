import React, { useContext } from 'react'

// MUI
import { Button, Grid, Typography, Checkbox } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// contexts
import { ControlPanelContext } from '../../contexts/ControlPanelContext';

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
    const {
        genTrigger,
        setGenTrigger,
        random,
        setRandom,
        branchesCount,
        setBranchesCount,
        angleValue,
        setAngleValue
    } = useContext(ControlPanelContext);

    const onCheckboxChange = () => {
        setRandom(!random);
    }

    const onBranchesCountChange = e => {
        // e.preventDefault();
        setBranchesCount(e.target.value);
    }

    const onAngleValueChange = e => {
        // e.preventDefault();
        setAngleValue(e.target.value);
    }

    return (
        <div className={classes.root}>
            <Grid container className={classes.grid}>
                <Grid item xs={4} className={classes.gridItem}>
                    <input className={classes.input} type='number' value={branchesCount} onChange={onBranchesCountChange} />
                    <Typography className={classes.label}>Branches</Typography>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Button variant="contained" color="primary" onClick={() => setGenTrigger(genTrigger + 1)} style={{
                        height: 50
                    }}>
                        Generate Fractal
                    </Button>
                    <div>
                        <Typography className={classes.label}>Randomize</Typography>
                        <Checkbox
                            checked={random}
                            onChange={onCheckboxChange}
                            name="random"
                            color="primary"
                            style={{
                                borderColor: 'white'
                            }}
                        />
                    </div>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <input className={classes.input} type='number' value={angleValue} onChange={onAngleValueChange} />
                    <Typography className={classes.label}>Angle</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default ControlPanel

