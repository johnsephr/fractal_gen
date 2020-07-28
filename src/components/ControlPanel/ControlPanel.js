import React, { useContext } from 'react'

// MUI
import { Button, Grid, Typography, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// contexts
import { ControlPanelContext } from '../../contexts/ControlPanelContext';

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        height: '100%',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto'
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
        color: theme.palette.primary.main,
        marginTop: 10
    },
    input: {
        height: 50,
        width: 100,
        fontSize: 20,
        outline: 'none',
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        textAlign: 'center',
        background: 'transparent',
        borderRadius: 4,
    }
}))

const ControlPanel = props => {
    const classes = useStyles(props)
    const {
        genTrigger,
        setGenTrigger,
        branches,
        setBranches,
        angle,
        setAngle,
        levels,
        setLevels
    } = useContext(ControlPanelContext);

    const onBranchesChange = e => {
        setBranches(e.target.value);
    }

    const onAngleChange = e => {
        setAngle(e.target.value);
    }

    const onLevelsChange = e => {
        console.log(e.target.value)
        setLevels(e.target.value);
    }

    return (
        <div className={classes.root}>
            <FormGroup row style={{ marginBottom: 10}}>
                <Grid container>
                    <Grid item xs={12} className={classes.gridItem}>
                        <Button variant="contained" color="primary" onClick={() => setGenTrigger(genTrigger + 1)} style={{
                            height: 50
                        }}>
                            Generate Fractal
                        </Button>
                        {/* <FormControlLabel
                            control={
                                <Checkbox
                                    checked={random}
                                    onChange={onCheckboxChange}
                                    name="random"
                                    color="primary"
                                    style={{
                                        borderColor: 'white'
                                    }}
                                />
                            }
                            label="Randomize"
                        /> */}
                    </Grid>
                </Grid>
            </FormGroup>

            <FormGroup row>
                <Grid container>
                    <Grid item xs={4} className={classes.gridItem}>
                        <input className={classes.input} type='number' value={branches} onChange={onBranchesChange} />
                        <Typography className={classes.label}>Branches</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.gridItem}>
                        <input className={classes.input} type='number' value={angle} onChange={onAngleChange} />
                        <Typography className={classes.label}>Angle</Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.gridItem}>
                        <input className={classes.input} type='number' value={levels} min="1" max="5" onChange={onLevelsChange} />
                        <Typography className={classes.label}>Levels</Typography>
                    </Grid>
                </Grid>
            </FormGroup>

            {/* branches, angle, track mouse position, levels */}
        </div>
    )
}

export default ControlPanel

